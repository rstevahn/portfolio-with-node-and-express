/* Treehouse FSJS Techdegree
 * Project 6 - client-server Portfolio built using JavaScript, node.js and express
 * app.js */

/*jshint esversion: 6 */

const express = require('express');
const indexRoute = require('./routes'); // our root router (./routes/index.js)
const aboutRoute = require('./routes/about'); // our about page router
const projectsRoute = require('./routes/projects'); // portfolio redirect

const app = express(); // start an express server

app.use('/static', express.static('public')); // serve our static content

app.set('view engine', 'pug'); // we'll be using pug templates

app.use(indexRoute); // set up our root route
app.use('/about', aboutRoute); // our about page
app.use('/projects', projectsRoute); // if they try to go directly to the portfolio

app.use((req, res, next) => {
    const errNotFound = new Error('Not Found');
    errNotFound.status = 404;
    app.render('error', errNotFound);
    // next(errNotFound);
  });  

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
    });

app.listen(3000, () => {
    console.log('The portfolio application is running on localhost:3000!');
});