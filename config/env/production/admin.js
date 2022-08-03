module.exports = ({ env }) => ({
    url:env('WEBSITE_URL'),
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
  });
  