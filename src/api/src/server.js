const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const cookieSession = require('cookie-session')

require('dotenv').config({ path: "./.env" });

const { randomString } = require('./modules/utils')
const logger = require('./modules/logger')
const Database = require('./modules/db');
const { MinecraftPost, BedwarsPost } = require('./modules/schema/Post');
const PORT = process.env.PORT || 3000

//App settings
app.use(cors({ credentials: true, origin: "http://localhost:4200" }));
app.set('trust proxy', 1) // trust first proxy
app.use(cookieSession({
    secret: randomString(),
    secure: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Database
let db = new Database();

//Set up routes
app.all("*", (req, res, next) => {
    logger.info(`Request: [${req.method}] -> ${req.url}`);
    next()
})
app.use('/api/v1', require('./router/v1'))
app.get('/', (req, res) => { res.redirect("https://discord.com/api/oauth2/authorize?client_id=730062995438174220&redirect_uri=http%3A%2F%2Flocalhost%3A1323%2Fapi%2Fv1%2FdiscordCallback&response_type=code&scope=identify%20guilds") })



app.all('*', (req, res) => { res.send({ code: 404, message: "Not found" }) })

app.listen(PORT, () => {
    logger.info("Service listening on 0.0.0.0:" + PORT)
})