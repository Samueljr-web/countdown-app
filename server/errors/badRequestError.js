const CustomApiError = require('./customApiError');

module.exports = class BadRequestError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
};
