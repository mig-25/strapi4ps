module.exports = ({ env }) => ({
    //...
    "import-export-entries": {
      enabled: true,
    },
    'entity-notes': {
      enabled: true,
    },
    gatsby: {
      enabled: true,
      sourcePlugin: '@relate-app/gatsby-source-strapi',
    },
    scheduler: {
      enabled: true,
      config: {
        model: "scheduler",
      },
    },
    placeholder: {
      enabled: true,
      config: {
        size: 10,
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    //...
  });