module.exports = class CustomApiError extends Error {
  constructor(message) {
    super(message);
  }
};
