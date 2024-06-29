/**
 * @license Apache-2.0
 * @copyright Sagar Aute
 */

'use strict';

/**
 * node modules
 */
const cors = require('cors');
const cookieParser = require('cookie-parser');

/**
 * custom modules
 */
const login = require('./src/routes/login_route');
const auth = require('./src/routes/auth_route');
const authenticatedUser = require('./src/middlewares/auth_user_middleware');
const home = require('./src/routes/home_route');

// Initial express app
const express = require('express');
const app = express();

/**
 * EJS Setting
 */
app.set('view engine', 'ejs');

/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`));

/**
 * Enable cors & cookie parser
 */
app.use(cors()).use(cookieParser());

/**
 * Login page
 */
app.use('/login', login);

/**
 * Auth page
 */
app.use('/auth', auth);

/**
 * check user is authenticated
 */
app.use(authenticatedUser);

/**
 * home page
 */
app.use('/', home);

app.listen(5000, ()=> {
    console.log(`Server listenning at http://localhost:5000`);
});
