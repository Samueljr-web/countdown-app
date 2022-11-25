const CountDown = require('../models/countdownModel');
const BadRequestError = require('../errors/badRequestError');
const NotFoundError = require('../errors/notFoundError');
const UnauthorizedError = require('../errors/unathorizedError');

const createCountdown = async (req, res) => {
  const { title, date } = req.body;
  const { hash } = req.params;
  if (!title || !date || !hash) {
    throw new BadRequestError('Please fill in all required fields');
  }
  // const hash = Math.random().toString(36).substring(7);
  req.body.hash = hash;
  const countdown = await CountDown.create(req.body);
  res.status(201).json(countdown);
};
const editCountdown = async (req, res) => {
  const { id, hash } = req.params;
  const { title, date } = req.body;
  if (!title || !date) {
    throw new BadRequestError('Please fill in all required fields');
  }
  const countdown = await CountDown.findOneAndUpdate(
    { hash, _id: id },
    req.body,
    { new: true }
  );
  if (!countdown) {
    throw new UnauthorizedError('Invalid credentials to edit event');
  }

  res.status(200).json(countdown);
};
const deleteCountdown = async (req, res) => {
  const { id, hash } = req.params;

  const hashCountdown = await CountDown.findOne({ hash });
  if (!hashCountdown) {
    throw new UnauthorizedError('Invalid credentials to delete event');
  }

  const deletedCountdown = await CountDown.findOneAndDelete({ _id: id, hash });
  if (!deletedCountdown) {
    throw new NotFoundError('This event cannot be found in the database');
  }
  res.status(200).send('Event deleted successfully');
};
const getCountdown = async (req, res) => {
  const { id, title } = req.params;
  if (!title || !id) {
    throw new BadRequestError('please input the correct parameters');
  }
  const countdown = await CountDown.findOne({ title, _id: id });
  if (!countdown) {
    throw new NotFoundError(`No event with the title ${title} found`);
  }
  res.status(200).json(countdown);
};

module.exports = {
  createCountdown,
  editCountdown,
  getCountdown,
  deleteCountdown,
};
