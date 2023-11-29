
const express = require('express');
const { createUrl, goFullUrl, urlDetails } = require('../controllers/url');

const router = express.Router();

router.post('/createUrl',createUrl);
router.get('/goFullUrl/:shortUrl',goFullUrl);
//router.get('/urlDetails/:shortUrl',urlDetails);

module.exports = router