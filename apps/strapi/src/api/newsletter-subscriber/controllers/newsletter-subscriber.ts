import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::newsletter-subscriber.newsletter-subscriber',
  ({ strapi }) => ({
    async subscribe(ctx) {
      try {
        const { email } = ctx.request.body;

        // Validate email
        if (!email || !email.includes('@')) {
          return ctx.badRequest('Please provide a valid email address');
        }

        // Check if email already exists
        const existingSubscriber = await strapi.db
          .query('api::newsletter-subscriber.newsletter-subscriber')
          .findOne({
            where: { email: email.toLowerCase() },
          });

        if (existingSubscriber) {
          // If exists and unsubscribed, resubscribe
          if (existingSubscriber.status === 'unsubscribed') {
            await strapi.db
              .query('api::newsletter-subscriber.newsletter-subscriber')
              .update({
                where: { id: existingSubscriber.id },
                data: { status: 'subscribed' },
              });

            return ctx.send({
              message: 'Welcome back! You have been resubscribed to our newsletter.',
              data: { email: email.toLowerCase() },
            });
          }

          return ctx.send({
            message: 'You are already subscribed to our newsletter!',
            data: { email: email.toLowerCase() },
          });
        }

        // Create new subscriber
        const subscriber = await strapi.db
          .query('api::newsletter-subscriber.newsletter-subscriber')
          .create({
            data: {
              email: email.toLowerCase(),
              status: 'subscribed',
              subscribedFrom: 'blog',
              ipAddress: ctx.request.ip,
            },
          });

        return ctx.send({
          message: 'Thank you for subscribing! Check your inbox for updates.',
          data: { email: subscriber.email },
        });
      } catch (error) {
        console.error('Newsletter subscription error:', error);
        return ctx.internalServerError('An error occurred while processing your subscription');
      }
    },
  })
);
