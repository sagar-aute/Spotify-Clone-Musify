/**
 * @license Apache-2.0
 * @copyright Sagar Aute
 */

'use strict';

/**
 * custom modules
 */
const { getData } = require('../config/axios_config');

/**
 * Get detailed profile information about the current user
 * @param {Object} req server request object
 * @returns {Object}
 */
const getProfile = async (req) => {
    // try {
        const { data : currentProfile } = await getData('/me', req.cookies.access_token);
        // if (!response || !response.data) {
        //     console.error('Invalid response from getData:', response);
        //     throw new Error('Failed to fetch profile data.');
        // }

        // const { data: currentProfile } = response;
        return currentProfile;
    // } catch (error) {
    //     console.error('Error fetching profile data:', error.message);
    //     throw error;
    // }
}

module.exports = {
    getProfile
}
