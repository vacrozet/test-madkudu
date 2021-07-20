require('dotenv').config();
const { createLogger, format, transports } = require('winston');

const { combine, json, colorize, timestamp, printf } = format;

const myFormat = printf(({ message, level, timestamp: messageTimestamp, durationMs, ...rest }) => {
  // eslint-disable-next-line max-len
  const header = `[${level}][${messageTimestamp}]${durationMs ? `[${durationMs} ms]` : ''}`;

  // eslint-disable-next-line max-len
  let extraneous = '';
  if (Object.keys(rest).length) extraneous = `\n${JSON.stringify(rest)}`;
  return `${header}: ${message}${extraneous}`;
});

const logger = createLogger({
  transports: [
    new transports.Console({ level: process.env.LOGGER_LEVEL || 'info' })
    // new transports.File({ filename: 'logs/verbose.log', level: 'verbose' }),
  ],
  format: combine(colorize(), timestamp(), json(), myFormat)
});

module.exports = logger;
