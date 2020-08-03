const mongoose = require('mongoose')
let Discord = require('./../discordOAuth')


const postSchema = new mongoose.Schema({
    created: { type: Date, default: Date.now }
})

const User = mongoose.model('Post', postSchema);

module.exports = User;