define(['../utilities', '../headers'], function(utils, headers) {

    'use strict';

    /**
     * Profiles API
     *
     * @namespace
     * @name api.profiles
     */
    return function profiles() {

        return {

            /**
             * Retrieve the profile of the currently logged user
             *
             * @method
             * @memberof api.profiles
             * @returns {promise}
             */
            me: utils.requestFun('GET', '/profiles/me'),

            /**
             * Update profiles
             *
             * @method
             * @memberof api.profiles
             * @param {object} data - The new profiles data
             * @returns {promise}
             */
            update: utils.requestWithDataFun('PATCH', '/profiles/me', [], headers().contentType('profileAmendment'), true)

        };
    };

});
