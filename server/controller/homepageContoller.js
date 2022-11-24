const formModel = require("../models/homepageModel");

exports.createForm = async (req, res) => {
  const { eventName, reason, date } = req.body;

  const form = await formModel.create({
    eventName,
    reason,
    date,
  });

  return res.status(201).json({ message: "Countdown Added", form });
};

exports.getForm = async (req, res) => {
  const { id } = req.params;

  const form = await formModel.findById({ _id: id });
  return res.status(200).json({ message: "Countdown Loded", form });
};
