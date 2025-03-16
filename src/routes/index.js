const express = require('express');
const { getRoute } = require('./root');
const logRequest = require('../middlewares/logger');

const router = express.Router();

router.get('/',logRequest, getRoute);

module.exports = router;