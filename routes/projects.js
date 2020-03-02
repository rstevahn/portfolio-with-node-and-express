// jshint esversion: 6

const express = require('express');
const router = express.Router();
const { projects } = require('../data.json'); // JSON data object

router.get('/', (req, res) => {
    res.redirect('../'); // just redirect to the index
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (id > 0 && id <= projects.length) {
        res.render('project', projects[id - 1]);
    } else {
        const err = new Error('Not Found');
        err.status = 404;
        res.render('error', err);
    }
});

router.get((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    res.render('error', err);
});

module.exports = router;