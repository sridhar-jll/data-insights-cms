'use strict';

/**
 * client-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-subscription.client-subscription');
