const logger = require('../modules/logger');
const router = require('express').Router()
const Discord = require('./../modules/discordOAuth')
const User = require('./../modules/schema/User')
const _ = require('lodash')


//DiscordLogin
router.get('/discordCallback', async(req, res) => {
    if (!req.query.code)
        return res.redirect('/')
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
        req.session.user = res.send(_.pick((await User.find({ id: user.id })[0]), ["discriminator", "username", "locale"]))
    }
    req.session.user = users[0];
    res.redirect("http://localhost:4200/home")
})

//GetLoggedInUser
router.get('/me', async(req, res) => {
    if (req.session.user) res.send(_.pick((await User.find({ id: req.session.user.id }))[0], ["discriminator", "username", "locale"]))
    else res.send(undefined);
})

router.get('/logout', async(req, res) => {
    req.session.user = undefined
});


module.exports = router;