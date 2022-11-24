const formModel = require("../models/homepageModel");

exports.createForm = async (req, res) => {
  const { eventName, reason, date } = req.body;

  const form = await formModel.create({
    eventName,
    reason,
    date
  });

  return res.status(201).json({status:"Countdown Added",form})
};
