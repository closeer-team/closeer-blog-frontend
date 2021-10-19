import { getStrapiClient } from '~services/client.config';

const Tags = {
  getAll: async (ctx, { query }) => {
    try {
      const strapi = getStrapiClient(ctx);
    } catch (error) {}
  },
  getOne: async (ctx, { id }) => {
    try {
      const strapi = getStrapiClient(ctx);
    } catch (error) {}
  },
  new: async (ctx, { body }) => {
    try {
      const strapi = getStrapiClient(ctx);
    } catch (error) {}
  },
  update: async (ctx, { id, body }) => {
    try {
      const strapi = getStrapiClient(ctx);
    } catch (error) {}
  },
  delete: async (ctx, { id }) => {
    try {
      const strapi = getStrapiClient(ctx);
    } catch (error) {}
  }
};

export default Tags;
