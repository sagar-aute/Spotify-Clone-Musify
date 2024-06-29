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
const { home } = require('../controllers/home_controller');

router.get('/', home);

module.exports = router;