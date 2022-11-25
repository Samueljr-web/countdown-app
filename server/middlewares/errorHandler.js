const CustomApiError = require('../errors/customApiError');

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.message);
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).send(err.message);
  }
  if (err.message.includes('duplicate key error')) {
    return res
      .status(401)
      .send(
        `Title ${err.keyValue?.title} already exists, please use another title`
      );
  }
  return res.status(500).json({ msg: err });
};

module.exports = errorHandlerMiddleware;
