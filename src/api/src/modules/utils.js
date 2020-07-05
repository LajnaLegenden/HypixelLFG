const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890"
    /**
     * 
     * @param {number} length Length of string to be returned
     * @param {string} chars Charset to use instead of default
     */
function randomString(length = 16, chars = charset) {
    let out = "";
    for (let i = 0; i < length; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
    }
    return out;
}

module.exports = { randomString }