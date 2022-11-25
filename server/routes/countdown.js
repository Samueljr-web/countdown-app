const express = require('express');
const {
  createCountdown,
  getCountdown,
  editCountdown,
  deleteCountdown,
} = require('../controller/countdownController');
const router = express.Router();

//create a particular event
router.post('/', createCountdown);
router.patch('/edit/:id', editCountdown);
router.delete('/delete/:id', deleteCountdown);
router.get('/:title', getCountdown);
module.exports = router;
