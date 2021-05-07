const logger = require("./logger");
const { BedwarsPost, SkywarsPost } = require("./schema/Post");
const _ = require('lodash')


class MinecraftManager {
    constructor() {
        logger.info("MinecraftManager.ctor(): Init MinecraftManager");
    }

    async getPosts(config) {
        let mode = _.get(config, "game").split("_")[1]
        switch (mode) {
            case "BEDWARS":
                return await BedwarsPost.find({ game: "MINECRAFT_BEDWARS" });
            case "SKYWARS":
                return await SkywarsPost.find({ game: "MINECRAFT_SKYWARS" });
            default:
                break;
        }
    }

    async createPost(config) {
        let mode = _.get(config, "game").split("_")[1]
        console.log(mode)
        switch (mode) {
            case "BEDWARS":
                new BedwarsPost(config).save();
                break;
            case "SKYWARS":
                new SkywarsPost(config).save();
            default:
                break;
        }
    }
}
let mm = new MinecraftManager();
module.exports = mm;