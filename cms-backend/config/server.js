module.exports = ({ env }) => {
  console.log('Current environment:', env('NODE_ENV')); // Dodaj ten log
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    environment: env('NODE_ENV', 'development'), // Użyj NODE_ENV, ignoruj RAILWAY_ENVIRONMENT_NAME
  };
};
