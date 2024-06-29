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
 * custom module
 */
const { login } = require('../controllers/login_controller');

router.get('/', login);

module.exports = router;