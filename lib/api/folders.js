define(['../utilities', '../headers'], function(utils, headers) {

    'use strict';

    /**
     * Folders API
     *
     * @namespace
     * @name api.folders
     */
    return function folders() {

        return {

            /**
             * Create a new folder
             *
             * @method
             * @memberof api.folders
             * @param {object} data - The folder data
             * @returns {promise}
             */
            create: utils.requestWithDataFun('POST', '/folders', [], headers().contentType('folder'), true),

            /**
             * Retrieve a folder
             *
             * @method
             * @memberof api.folders
             * @param {string} id - A folder UUID
             * @returns {promise}
             */
            retrieve: utils.requestFun('GET', '/folders/{id}', ['id']),

            /**
             * Update a folder
             *
             * @method
             * @memberof api.folders
             * @param {object} data - The folder data
             * @returns {promise}
             */
            update: utils.requestWithDataFun('PATCH', '/folders/{id}', ['id'], headers().contentType('folder'), true),

            /**
             * Delete a folder
             *
             * @method
             * @memberof api.folders
             * @param {string} id - A folder UUID
             * @returns {promise}
             */
            delete: utils.requestFun('DELETE', '/folders/{id}', ['id']),

            /**
             * Remove a document from a folder
             *
             * @method
             * @memberof api.folders
             * @param {string} id - A folder UUID
             * @param {string} documentId - A document UUID
             * @returns {promise}
             */
            removeDocument: utils.requestFun('DELETE', '/folders/{id}/documents/{docId}', ['id', 'docId'], headers().contentType('folder')),

            /**
             * Add a document to a folder
             *
             * @method
             * @memberof api.folders
             * @param {string} id - A folder UUID
             * @param {string} documentId - A document UUID
             * @returns {promise}
             */
            addDocument: utils.requestWithDataFun('POST', '/folders/{id}/documents', ['id'], headers().contentType('documents'), false),

            /**
             * Get a list of folders
             *
             * @method
             * @memberof api.folders
             * @returns {promise}
             */
            list: utils.requestFun('GET', '/folders/'),

            /**
             * The total number of folders - set after the first call to folders.list()
             *
             * @var
             * @memberof api.folders
             * @type {integer}
             */
            count: 0,

            /**
             * Get the next page of folders
             *
             * @method
             * @memberof api.folders
             * @returns {promise}
             */
            nextPage: utils.requestPageFun('next'),

            /**
             * Get the previous page of folders
             *
             * @method
             * @memberof api.folders
             * @returns {promise}
             */
            previousPage: utils.requestPageFun('previous'),

            /**
             * Get the last page of folders
             *
             * @method
             * @memberof api.folders
             * @returns {promise}
             */
            lastPage: utils.requestPageFun('last'),

            /**
             * Get pagination links
             *
             * @method
             * @memberof api.folders
             * @returns {object}
             */
            paginationLinks: {
                last: false,
                next: false,
                previous: false
            },

            /**
             * Reset all pagination links
             *
             * @method
             * @memberof api.folders
             */
            resetPagination: utils.resetPaginationLinks

        };
    };

});
