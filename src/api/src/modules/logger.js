const winston = require('winston');
const moment = require('moment')


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.prettyPrint(),
    transports: [
        new winston.transports.File({ filename: `/data/log/HypixelLFG-${moment().format("DD-MM-YYYY")}.log` }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

logger.info("Logger initialized")

module.exports = logger