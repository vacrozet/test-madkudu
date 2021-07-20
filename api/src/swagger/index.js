const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const packageJson = require('../../package.json');
const definitions = require('./definitions');

const {
  list: { list }
} = require('./routes');

const options = {
  swaggerDefinition: {
    info: {
      title: 'API Test Fasterize',
      version: packageJson.version,
      description: 'Documentation API Test Fasterize'
    },
    schemes: ['http'],
    host: `localhost:${process.env.PORT}`,
    tags: [
      {
        name: 'Upload',
        description: 'Upload',
        externalDocs: {
          description: 'Upload'
        }
      },
      {
        name: 'Resize',
        description: 'Resize',
        externalDocs: {
          description: 'Resize'
        }
      }
    ],
    paths: {
      '/list': list
    },
    definitions
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./route/index.js']
};

const specs = swaggerJsdoc(options);

module.exports = app => {
  app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(specs));
};
