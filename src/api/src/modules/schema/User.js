const mongoose = require('mongoose')
let Discord = require('./../discordOAuth')


const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    avatar: String,
    locale: String,
    numberOfPosts: Number,
    access_token: String,
    refresh_token: String,
    //Discord tag number
    discriminator: String,
    token_type: String,
    id: Number,
    logins: { type: Number, default: 1 },
    created: { type: Date, default: Date.now }
})

userSchema.methods.getAuthHeader = () => {
    return `${this.token_type} ${this.access_token}`;
}

userSchema.methods.refreshToken = async function() {
    console.log(this)
    let discordRes = await Discord.refreshToken(this.refresh_token)
    this.refresh_token = discordRes.refresh_token;
    this.access_token = discordRes.access_token;
    console.log(this)
    this.save()
}

userSchema.methods.loggingIn = function() {
    this.logins++;
    this.save();
}
const User = mongoose.model('User', userSchema);

module.exports = User;