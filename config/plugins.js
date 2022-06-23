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
    //...
  });