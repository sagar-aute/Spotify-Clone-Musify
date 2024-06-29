/**
 * @license Apache-2.0
 * @copyright Sagar Aute
 */

'use strict';

/**
 * node modules
 */
require('dotenv').config();

// The base address of web api
const BASE_URI = 'https://api.spotify.com/v1';

// The base address of spotify authentication token
const TOKEN_BASE_URI = 'https://accounts.spotify.com/api';

// spotify client id
const CLIENT_ID = process.env.CLIENT_ID;

// spotify client secret
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Redirect uri
const REDIRECT_URI = process.env.REDIRECT_URI;

// Scope of spotify api request
const SCOPE = process.env.SCOPE;

// Authentication state key
const STATE_KEY = 'spotify_auth_state';

// API request queries
const MARKET = 'US';
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;

module.exports = {
    BASE_URI, 
    TOKEN_BASE_URI,
    CLIENT_ID, 
    CLIENT_SECRET,
    REDIRECT_URI,
    SCOPE,
    STATE_KEY,
    MARKET,
    LOW_LIMIT,
    DEFAULT_LIMIT
}