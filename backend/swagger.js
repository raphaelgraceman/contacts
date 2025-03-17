const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contact API',
    description: 'Contact API'
  },
  host: 'localhost:8080',
  schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// auto generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
