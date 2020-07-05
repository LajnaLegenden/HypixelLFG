let express = require('express')
let app = express();
let logger = require('./modules/logger')

let PORT = process.env.PORT || 3000


//Set up routes
app.use('/api/v1', require('./router/v1'))
app.all('*', (req, res) => { res.send({ code: 404, message: "Not found" }) })



app.listen(PORT)