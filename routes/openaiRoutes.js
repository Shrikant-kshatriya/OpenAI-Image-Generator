const express = require('express');
const router = express.Router();
const {generateImg} = require('../controllers/openaiController');

router.post('/generateimg', generateImg);

module.exports = router;