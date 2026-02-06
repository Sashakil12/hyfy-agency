import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::blog-post.blog-post', ({ strapi }) => ({
  async find(ctx) {
    const { page = 1, pageSize = 9, sort = 'publishedDate:desc', ...query } = ctx.query;

    const sanitizedQuery = await this.sanitizeQuery(ctx);

    const { results, pagination } = await strapi.service('api::blog-post.blog-post').find({
      ...sanitizedQuery,
      populate: {
        featuredImage: {
          fields: ['url', 'alternativeText', 'width', 'height']
        },
        seo: {
          populate: {
            metaImage: {
              fields: ['url', 'alternativeText']
            }
          }
        }
      },
      pagination: {
        page: Number(page),
        pageSize: Number(pageSize),
      },
      sort: sort,
      publicationState: 'live',
    });

    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return {
      data: sanitizedResults,
      meta: {
        pagination
      }
    };
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    const sanitizedQuery = await this.sanitizeQuery(ctx);

    const entity = await strapi.service('api::blog-post.blog-post').findOne(id, {
      ...sanitizedQuery,
      populate: {
        featuredImage: {
          fields: ['url', 'alternativeText', 'width', 'height', 'formats']
        },
        seo: {
          populate: {
            metaImage: {
              fields: ['url', 'alternativeText']
            }
          }
        }
      },
      publicationState: 'live',
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return {
      data: sanitizedEntity
    };
  },
}));
