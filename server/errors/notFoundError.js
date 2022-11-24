const CustomApiError = require('./customApiError');

module.exports = class NotFoundError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
};
