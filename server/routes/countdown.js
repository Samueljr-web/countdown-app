const express = require('express');
const {
  createCountdown,
  getCountdown,
  editCountdown,
  deleteCountdown,
} = require('../controller/countdownController');
const router = express.Router();

//create a particular event
router.post('/:hash', createCountdown);
router.patch('/edit/:hash/:id', editCountdown);
router.delete('/delete/:hash/:id', deleteCountdown);
router.get('/:id/:title', getCountdown);
module.exports = router;
