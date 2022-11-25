const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const countDownSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title to your countdown'],
    },
    date: {
      type: String,
      required: [true, 'please provide a countdown date'],
    },
    hash: {
      type: String,
      required: [true, 'please provide hash'],
    },
    time: String,
    reason: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('CountDown', countDownSchema);
