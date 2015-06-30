define(['../utilities', '../headers'], function(utils, headers) {

    'use strict';

    /**
     * Documents API
     *
     * @namespace
     * @name api.documents
     */
    return function documents() {
        var listDocuments = utils.requestFun('GET', '/documents/'),
            listFolder = utils.requestFun('GET', '/folders/{id}/documents', ['id']);

        return {

            /**
             * Create a new document
             *
             * @method
             * @memberof api.documents
             * @param {object} data - The document data
             * @returns {promise}
             */
            create: utils.requestWithDataFun('POST', '/documents', false, headers().contentType('document'), true),

            /**
             * Create a new document from a file
             *
             * @method
             * @memberof api.documents
             * @param {object} file - A file object
             * @returns {promise}
             */
            createFromFile: utils.requestWithFileFun('POST', '/documents'),

            /**
             * Create a new group document from a file
             *
             * @method
             * @memberof api.documents
             * @param {object} file - A file object
             * @param {string} groupId - A group UUID
             * @returns {promise}
             */
            createFromFileInGroup: utils.requestWithFileFun('POST', '/documents', 'group'),

            /**
             * Retrieve a document
             *
             * @method
             * @memberof api.documents
             * @param {string} id - A document UUID
             * @returns {promise}
             */
            retrieve: utils.requestFun('GET', '/documents/{id}', ['id']),

            /**
             * Update document
             *
             * @method
             * @memberof api.documents
             * @param {object} data - The new document data
             * @returns {promise}
             */
            update: utils.requestWithDataFun('PATCH', '/documents/{id}', ['id'], headers().contentType('document'), true),

            /**
             * Clone a document from user library to a group ( or vice versa )
             *
             * @method
             * @memberof api.documents
             * @param {object} id - A document UUID
             * @returns {promise}
             */
            clone: utils.requestWithDataFun('POST', '/documents/{id}/actions/cloneTo', ['id'], headers().contentType('documentClone'), true),

            /**
             * List documents
             *
             * @method
             * @memberof api.documents
             * @param {object} params - Query paramaters
             * @returns {promise}
             */
            list: function(params) {
                if (!params || typeof params.folderId === 'undefined') {
                    return listDocuments.call(this, params);
                } else {
                    var folderId = params.folderId,
                        callParams = {
                            limit: params.limit
                        };
                    delete params.folderId;
                    return listFolder.call(this, folderId, callParams);
                }
            },

            /**
             * Search documents
             *
             * @method
             * @memberof api.documents
             * @param {object} params - Search paramaters
             * @returns {promise}
             */
            search: utils.requestFun('GET', '/search/documents'),

            /**
             * Move a document to the trash
             *
             * @method
             * @memberof api.documents
             * @param {object} id - A document UUID
             * @returns {promise}
             */
            trash: utils.requestFun('POST', '/documents/{id}/trash', ['id'], headers().contentType('document')),

            /**
             * The total number of documents - set after the first call to documents.list()
             *
             * @var
             * @memberof api.documents
             * @type {integer}
             */
            count: 0,

            /**
             * Get the next page of documents
             *
             * @method
             * @memberof api.documents
             * @returns {promise}
             */
            nextPage: utils.requestPageFun('next'),

            /**
             * Get the previous page of documents
             *
             * @method
             * @memberof api.documents
             * @returns {promise}
             */
            previousPage: utils.requestPageFun('previous'),

            /**
             * Get the last page of documents
             *
             * @method
             * @memberof api.documents
             * @returns {promise}
             */
            lastPage: utils.requestPageFun('last'),

            /**
             * Get pagination links
             *
             * @method
             * @memberof api.documents
             * @returns {object}
             */
            paginationLinks: {
                last: false,
                next: false,
                previous: false
            },

            /**
             * Reset all pagination
             *
             * @method
             * @memberof api.documents
             */
            resetPagination: utils.resetPaginationLinks

        };
    };

});
