const logger = require('../logger');

module.exports = (req, res, next) => {
  const profiler = logger.startTimer();
  const oldWrite = res.write;
  const oldEnd = res.end;
  const chunks = [];

  res.write = (...rest) => {
    chunks.push(Buffer.from(rest[0]));
    oldWrite.apply(res, rest);
  };

  res.end = (...rest) => {
    if (rest[0]) {
      chunks.push(Buffer.from(rest[0]));
    }
    const body = Buffer.concat(chunks).toString();
    profiler.done({
      message: `${req.method} - ${req.originalUrl} : ${res.statusCode} ${
        res.statusMessage ? res.statusMessage : ''
      }`,
      level: 'info'
    });
    logger.verbose('REQUEST : ', { ...req.body });
    logger.verbose('RESPONSE : ', { body });
    oldEnd.apply(res, rest);
  };

  next();
};
