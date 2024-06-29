/**
 * @license Apache-2.0
 * @copyright Sagar Aute
 */

'use strict';


/**
 * node modules
 */
const router = require('express').Router();

/**
 * custom modules
 */
const { auth, callback } = require('../controllers/auth_controller');
const { refreshToken } = require('../controllers/refresh_token_controller');

router.get('/', auth);

router.get('/callback', callback);

router.get('/refresh_token', refreshToken)

module.exports = router;