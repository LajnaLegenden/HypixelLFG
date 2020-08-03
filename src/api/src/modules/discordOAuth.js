let fetch = require('node-fetch');
let FormData = require('form-data');
const logger = require('./logger');

class DiscordOAuth {
    constructor() {
        logger.info("DiscordOAuth.ctor(): Init DiscordOAuth");
    }

    async codeToToken(code) {
        logger.info("DiscordOAuth.codeToToken(): Fetching token from discord using code: " + code);
        const data = new FormData();
        data.append('client_id', process.env.DISCORD_CLIENT_ID);
        data.append('client_secret', process.env.DISCORD_CLIENT_SECRET);
        data.append('grant_type', 'authorization_code');
        data.append('redirect_uri', 'http://localhost:1323/api/v1/discordCallback');
        data.append('scope', 'identify guilds');
        data.append('code', code);
        let discordRes = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: data,
        });

        logger.info("DiscordOAuth.codeToToken(): Got response from discord")
        discordRes = await discordRes.json();
        return discordRes;
    }

    async getUserInfo(info) {
        logger.info("DiscordOAuth.getUserInfo(): Fetching user info, context: " + JSON.stringify(info));

        let user = await fetch('https://discord.com/api/users/@me', {
            headers: {
                authorization: `${info.token_type} ${info.access_token}`,
            },
        })

        logger.info("DiscordOAuth.getUserInfo(): Done fetching user info");
        return await user.json();
    }

    async refreshToken(token) {
        logger.info("DiscordOAuth.refreshToken(): Refreshing user tokens");
        const data = new FormData();
        data.append('client_id', process.env.DISCORD_CLIENT_ID);
        data.append('client_secret', process.env.DISCORD_CLIENT_SECRET);
        data.append('grant_type', 'refresh_token');
        data.append('refresh_token', token);

        let discordRes = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: data,
        });
        discordRes = await discordRes.json()
        logger.info("DiscordOAuth.refreshToken(): Done refreshing tokens");

        return discordRes
    }
}

module.exports = new DiscordOAuth();