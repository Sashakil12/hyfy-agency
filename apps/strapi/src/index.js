'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Set permissions for contact-submission API
    try {
      const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        // Define the permissions we want to enable for public access
        const permissionsToEnable = [
          'api::contact-submission.contact-submission.create',
          'api::contact-submission.contact-submission.find',
          'api::contact-submission.contact-submission.getBookedSlots',
        ];

        for (const action of permissionsToEnable) {
          const existingPermission = await strapi.query('plugin::users-permissions.permission').findOne({
            where: {
              action,
              role: publicRole.id,
            },
          });

          if (!existingPermission) {
            await strapi.query('plugin::users-permissions.permission').create({
              data: {
                action,
                role: publicRole.id,
              },
            });
            strapi.log.info(`✅ Created permission: ${action}`);
          }
        }

        strapi.log.info('✅ Public permissions configured for contact-submission API');
      }
    } catch (error) {
      strapi.log.error('❌ Error setting permissions:', error);
    }
  },
};
