const logger = require('../modules/logger');
let router = require('express').Router()
let Discord = require('./../modules/discordOAuth')

const User = require('./../modules/schema/User')

router.get('/discordCallback', async(req, res) => {
    if (!req.query.code)
        return res.redirect('/')
    req.session.discordAuthToken = req.query.code;
    let discordRes = await Discord.codeToToken(req.query.code);
    let user = await Discord.getUserInfo(discordRes);

    let users = await User.find({ id: user.id });
    if (users.length > 0) {
        //User exists, log them in
        req.session.user = users[0];
        users[0].loggingIn();
    } else {
        //New user, create a profile of them
        let newUser = new User({...discordRes, ...user });
        newUser.save()
        req.session.user = newUser;
    }
    req.session.user = users[0];
    res.send(user)
})


module.exports = router;