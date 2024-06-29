/**
 * @license Apache-2.0
 * @copyright Sagar Aute
 */

'use strict';

/**
 * node modules
 */
const axios = require('axios');
const querystring = require('querystring');

/** 
 * custom modules
 */
const apiConfig = require('./api_config');

/**
 * axios instance for access token and refresh token request
 */
const token = axios.create({
    baseURL: apiConfig.TOKEN_BASE_URI,
    headers: {
        'Authorization': `Basic ${(Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET).toString('base64'))}`,
        'content-type': 'application/x-www-form-urlencoded'
    }
});

/**
 * axios instance for all api requests
 */
const api = axios.create({ baseURL: apiConfig.BASE_URI });

/**
 * Fetch data from an API using an access token for authentication.
 * @param {string} apiUrl The URL of the API endpoint to request data from
 * @param {string} accessToken The access token used for authentication
 * @returns {Promise} A promise that resolves with the response from the API or rejects with an error if the request fails. 
 */
const getData = async (apiUrl, accessToken) => {
    try {
        const /** {Promise} */response = await api.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response;
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    token,
    getData
};
