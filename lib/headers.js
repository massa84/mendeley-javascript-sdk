define(function() {

    'use strict';

    /*
    Extract the list of content-types from swagger by pasting the following in the console


    var contentTypes = {
    	'json': 'application/json',
    	'bibtex': 'application/x-bibtex'
    };
    $('[name=parameterContentType] option, [name=responseContentType] option').each(function(x,i) {
    	var ct = $(i).attr('value');
    	var type = ct.split('.')[1];
    	if(type && type.indexOf('mendeley') === 0) {
    		var key = type.replace('mendeley-','').replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    		contentTypes[key] = ct;
    	}
    });
    console.log('var contentTypes = ' + JSON.stringify(contentTypes).replace(/"/g,'\'').replace(/,/g,',\n    ') + ';');

    and pasting the result in this file

	*/

    var contentTypes = {
    	'json':'application/json',
	    'bibtex':'application/x-bibtex',
	    'academicStatus':'application/vnd.mendeley-academic-status.1+json',
	    'annotation':'application/vnd.mendeley-annotation.1+json',
	    'asaAttachmentType':'application/vnd.mendeley-asa-attachment-type.1+json',
	    'asaAuthorCreationResult':'application/vnd.mendeley-asa-author-creation-result.1+json',
	    'asaAuthorDetails':'application/vnd.mendeley-asa-author-details.1+json',
	    'asaAuthorUpdate':'application/vnd.mendeley-asa-author-update.1+json',
	    'asaError':'application/vnd.mendeley-asa-error.1+json',
	    'asaFileCreationResult':'application/vnd.mendeley-asa-file-creation-result.1+json',
	    'asaFileDetails':'application/vnd.mendeley-asa-file-details.1+json',
	    'asaFileUpdate':'application/vnd.mendeley-asa-file-update.1+json',
	    'asaSubmissionCreationResult':'application/vnd.mendeley-asa-submission-creation-result.1+json',
	    'asaSubmissionDigest':'application/vnd.mendeley-asa-submission-digest.1+json',
	    'asaSubmissionUpdate':'application/vnd.mendeley-asa-submission-update.1+json',
	    'copyright':'application/vnd.mendeley-copyright.1+json',
	    'datasetType':'application/vnd.mendeley-dataset-type.1+json',
	    'deletedDocument':'application/vnd.mendeley-deleted-document.1+json',
	    'discipline':'application/vnd.mendeley-discipline.1+json',
	    'document':'application/vnd.mendeley-document.1+json',
	    'documentClone':'application/vnd.mendeley-document-clone.1+json',
	    'documentIdentifier':'application/vnd.mendeley-document-identifier.1+json',
	    'documentLookup':'application/vnd.mendeley-document-lookup.1+json',
	    'documentType':'application/vnd.mendeley-document-type.1+json',
	    'education':'application/vnd.mendeley-education.1+json',
	    'educationAmendment':'application/vnd.mendeley-education-amendment.1+json',
	    'employment':'application/vnd.mendeley-employment.1+json',
	    'employmentAmendment':'application/vnd.mendeley-employment-amendment.1+json',
	    'featureMappings':'application/vnd.mendeley-feature-mappings.1+json',
	    'features':'application/vnd.mendeley-features.1+json',
	    'file':'application/vnd.mendeley-file.1+json',
	    'folder':'application/vnd.mendeley-folder.1+json',
	    'follow':'application/vnd.mendeley-follow.1+json',
	    'followAcceptance':'application/vnd.mendeley-follow-acceptance.1+json',
	    'followRequest':'application/vnd.mendeley-follow-request.1+json',
	    'group':'application/vnd.mendeley-group.1+json',
	    'institution':'application/vnd.mendeley-institution.1+json',
	    'locatedFile':'application/vnd.mendeley-located-file.1+json',
	    'location':'application/vnd.mendeley-location.1+json',
	    'membership':'application/vnd.mendeley-membership.1+json',
	    'message':'application/vnd.mendeley-message.1+json',
	    'newEducation':'application/vnd.mendeley-new-education.1+json',
	    'newEmployment':'application/vnd.mendeley-new-employment.1+json',
	    'newProfile':'application/vnd.mendeley-new-profile.1+json',
	    'newsItem':'application/vnd.mendeley-news-item.1+json',
	    'newsUpdate':'application/vnd.mendeley-news-update.1+json',
	    'notificationsSettings':'application/vnd.mendeley-notifications-settings.1+json',
	    'passwordChangeRequest':'application/vnd.mendeley-password-change-request.1+json',
	    'plainDocument':'application/vnd.mendeley-plain-document.1+json',
	    'profile':'application/vnd.mendeley-profile.1+json',
	    'profileAmendment':'application/vnd.mendeley-profile-amendment.1+json',
	    'profileId':'application/vnd.mendeley-profile-id.1+json',
	    'profileMigrationRequest':'application/vnd.mendeley-profile-migration-request.1+json',
	    'profilePrivacySettings':'application/vnd.mendeley-profile-privacy-settings.1+json',
	    'profiles':'application/vnd.mendeley-profiles.1+json',
	    'profilesMigration':'application/vnd.mendeley-profiles-migration.1+json',
	    'profileVerification':'application/vnd.mendeley-profile-verification.1+json',
	    'recentlyRead':'application/vnd.mendeley-recently-read.1+json',
	    'sendPasswordResetEmail':'application/vnd.mendeley-send-password-reset-email.1+json',
	    'statistics':'application/vnd.mendeley-statistics.1+json',
		};

	function createHeaders(headerType, contentType) {
		var headers = {};
		headers[headerType] = contentTypes[contentType] || contentType || '*/*';
		return headers;
	}
    return {
    	accept: createHeaders.bind(this, 'Accept'),
    	contentType: createHeaders.bind(this, 'Content-Type'),
    };
});