const express = require('express');
const router = express.Router();
const { getTrailers, updateTrailer } = require('../controllers/trailerController');

router.get('/', getTrailers);
router.put('/', updateTrailer);

module.exports = router;
