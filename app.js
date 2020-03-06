/* Treehouse FSJS Techdegree
 * Project 6 - client-server Portfolio built using JavaScript, node.js and express
 * app.js */

/*jshint esversion: 6 */

// Dependencies

const express = require('express'); // Express
const indexRoute = require('./routes'); // our root router (./routes/index.js)
const aboutRoute = require('./routes/about'); // our about page router
const projectsRoute = require('./routes/projects'); // portfolio redirect

// start and configure the server

const app = express(); // start an express server

app.use('/static', express.static('public')); // serve our static content

app.set('view engine', 'pug'); // we'll be using pug templates

app.use(indexRoute); // set up our root route
app.use('/about', aboutRoute); // our about page
app.use('/projects', projectsRoute); // if they try to go directly to the portfolio

// error handlers

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    res.locals.error = err;
    res.status(err.status);
    console.log('404 Error: Page Not Found');
    res.render('error');
});  

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

// finally, listen on our port

app.listen(3000, () => {
    console.log('The portfolio application is running on localhost:3000!');
});