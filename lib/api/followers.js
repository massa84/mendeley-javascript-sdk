define(['../utilities', '../headers'], function(utils, headers) {

    'use strict';

    /**
     * Followers API
     *
     * @namespace
     * @name api.followers
     */
    return function followers() {

        return {

            /**
             * Get a list of followers.
             *
             * @method
             * @memberof api.followers
             * @param {object} params - {
             *  follower: <profile_id>,
             *  followed: <profile_id>,
             *  status: <"following" or "pending">,
             *  limit: <int>
             * }
             * @returns {promise}
             */
            list: utils.requestFun('GET', '/followers'),

            /**
             * Create a follower relationship.
             *
             * The follower id is inferred from whoever is logged in. The response
             * is a relationship that includes the status which might be "following" or
             * "pending" depending on the privacy settings of the profile being
             * followed.
             *
             * @method
             * @memberof api.followers
             * @param {object} data - { followed: <profile id> }
             * @returns {promise}
             */
            create: utils.requestWithDataFun('POST', '/followers', false, headers().contentType('followRequest'), false),

            /**
             * Delete a follower relationship.
             *
             * This requires a relationship id which can be retrieved via the list() method.
             *
             * @param {string} id - The relationship id
             * @memberof api.followers
             * @returns {promise}
             */
            remove: utils.requestFun('DELETE', '/followers/{id}', ['id'])

        };
    };

});
