const CountDown = require('../models/countdownModel');
const BadRequestError = require('../errors/badRequestError');
const NotFoundError = require('../errors/notFoundError');
const UnauthorizedError = require('../errors/unathorizedError');

const createCountdown = async (req, res) => {
  const { title, date, hash } = req.body;
  if (!title || !date || !hash) {
    throw new BadRequestError('Please fill in all required fields');
  }
  // const hash = Math.random().toString(36).substring(7);

  const countdown = await CountDown.create(req.body);
  res.status(201).json(countdown);
};
const editCountdown = async (req, res) => {
  const { id } = req.params;
  const { hash, title, date } = req.body;
  if (!title || !date) {
    throw new BadRequestError('Please fill in all required fields');
  }
  const hashCountdown = await CountDown.findOne({ hash });
  if (!hashCountdown) {
    throw new UnauthorizedError('Invalid credentials to edit event');
  }
  const countdown = await CountDown.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!countdown) {
    throw new NotFoundError('no event found in the database');
  }
  res.status(200).json(countdown);
};
const deleteCountdown = async (req, res) => {
  const { id } = req.params;
  const { hash } = req.body;

  const hashCountdown = await CountDown.findOne({ hash });
  if (!hashCountdown) {
    throw new UnauthorizedError('Invalid credentials to edit event');
  }

  const deletedCountdown = await CountDown.findByIdAndDelete(id);
  if (!deletedCountdown) {
    throw new NotFoundError('This event cannot be found in the database');
  }
  res.status(200).send('Event deleted successfully');
};
const getCountdown = async (req, res) => {
  const { title } = req.params;
  if (!title) {
    throw new BadRequestError('please input the title');
  }
  const countdown = await CountDown.findOne({ title });
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
