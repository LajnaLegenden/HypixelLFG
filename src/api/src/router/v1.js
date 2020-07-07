let router = require('express').Router()



router.get('/', (req, res) => { res.send("eyyy") });

router.get('/callback', (req, res) => {
    console.log(req);
    res.send('OK')
})


module.exports = router;