import axios from 'axios';

export function getStrapiClient(ctx) {
  const strapi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI
  });

  strapi.interceptors.request.use(async config => {
    return config;
  });

  strapi.interceptors.response.use(
    async res => res,
    async err => {
      return Promise.reject(err);
    }
  );

  return strapi;
}
