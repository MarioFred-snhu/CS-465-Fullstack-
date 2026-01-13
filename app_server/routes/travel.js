const express = require('express');
const router = express.Router();

const ctrlTravel = require('../controllers/travel');

// GET travel page
router.get('/travel', ctrlTravel.travel);

module.exports = router;