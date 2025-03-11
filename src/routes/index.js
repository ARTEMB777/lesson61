const express = require('express');
const { getRoute } = require('./root');

const router = express.Router();

router.get('/', getRoute);

module.exports = router;