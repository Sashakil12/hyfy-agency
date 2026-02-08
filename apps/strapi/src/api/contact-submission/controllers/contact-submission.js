'use strict';

/**
 * contact-submission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-submission.contact-submission', ({ strapi }) => ({
  // Custom method to get booked time slots for a specific date
  async getBookedSlots(ctx) {
    try {
      const { date } = ctx.query;
      
      if (!date) {
        return ctx.badRequest('Date parameter is required');
      }

      const bookings = await strapi.entityService.findMany('api::contact-submission.contact-submission', {
        filters: {
          preferredDate: date,
          status: {
            $notIn: ['cancelled']
          }
        },
        fields: ['preferredTime', 'timezone'],
      });

      const bookedSlots = bookings.map(booking => ({
        time: booking.preferredTime,
        timezone: booking.timezone
      }));

      return { bookedSlots };
    } catch (err) {
      ctx.throw(500, err);
    }
  }
}));
