const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('career', { title: 'CAREER' });
});

module.exports = router;
