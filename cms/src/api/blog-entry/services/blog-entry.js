'use strict';

/**
 * blog-entry service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-entry.blog-entry');
