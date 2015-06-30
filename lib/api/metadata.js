define(['../utilities', '../headers'], function(utils, headers) {

    'use strict';

    /**
     * Metadata API
     *
     * @namespace
     * @name api.metadata
     */
    return function metadata() {

        return {

            /**
             * Retrieve a document metadata
             *
             * @method
             * @memberof api.metadata
             * @param {object} params - A metadata search filter
             * @returns {promise}
             */
            retrieve: utils.requestFun('GET', '/metadata', false, headers().accept('documentLookup'), false)

        };
    };

});
