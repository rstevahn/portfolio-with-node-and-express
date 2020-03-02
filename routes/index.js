// jshint esversion: 6

const express = require('express');
const router = express.Router();
const { projects } = require('../data.json'); // JSON data object

router.get('/', (req, res) => {
    res.render('index', { projects });
});

module.exports = router;