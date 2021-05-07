const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let Discord = require('./../discordOAuth')

const MINECRAFT_BASE = {
    created: { type: Date, default: Date.now },
    author: String,
    game: { type: String, default: "MINECRAFT" },
    deleted: { type: Boolean, default: false },
    server: Object,
    version: String,
    username: String,
    body: String,
    micRequired: String
}


const bedwarsSchema = new Schema(Object.assign(MINECRAFT_BASE, {
    type: String,
    lowStar: Number,
    highStar: Number,
    fkdr: Number,
    gamemode: String,
}), { collection: "Posts" })

const skywarsSchema = new Schema(Object.assign(MINECRAFT_BASE, {
    type: String,
    lowLevel: Number,
    highLevel: Number,
    kdr: Number,
    gamemode: String,
}), { collection: "Posts" })


const BedwarsPost = mongoose.model("BedwarsPost", bedwarsSchema),
    SkywarsPost = mongoose.model("SkywaysPost", skywarsSchema)

module.exports = { BedwarsPost, SkywarsPost };