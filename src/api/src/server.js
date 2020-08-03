const express = require('express')
const app = express();
const cookieSession = require('cookie-session')
const { randomString } = require('./modules/utils')

require('dotenv').config({ path: "./.env" });

const logger = require('./modules/logger')
const Database = require('./modules/db');
const PORT = process.env.PORT || 3000

//App settings
app.set('trust proxy', 1) // trust first proxy
app.use(cookieSession({
    secret: randomString()
}));

//Database
let db = new Database();

//Set up routes
app.use('/api/v1', require('./router/v1'))
app.get('/', (req, res) => { res.redirect("https://discord.com/api/oauth2/authorize?client_id=730062995438174220&redirect_uri=http%3A%2F%2Flocalhost%3A1323%2Fapi%2Fv1%2FdiscordCallback&response_type=code&scope=identify%20connections") })



app.all('*', (req, res) => { res.send({ code: 404, message: "Not found" }) })

app.listen(PORT)