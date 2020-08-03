const mongoose = require('mongoose');
const logger = require('./logger');


class Database {
    constructor() {
        mongoose.connect('mongodb://mongodb/HypixelLFG', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            // we're connected!
        });

    }
}

module.exports = Database;