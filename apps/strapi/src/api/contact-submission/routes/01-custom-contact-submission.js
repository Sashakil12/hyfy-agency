'use strict';

/**
 * contact-submission custom routes
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/contact-submissions/booked-slots',
      handler: 'contact-submission.getBookedSlots',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
