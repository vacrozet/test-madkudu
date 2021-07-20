module.exports = (res, error) => {
  return res.status(500).send({
    name: error.name,
    message: error.message,
    stack: error.stack
  });
};
