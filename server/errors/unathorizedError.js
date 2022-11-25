const CustomApiError = require('./customApiError');

module.exports = class UnauthorizedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
};
