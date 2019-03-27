const cors = require('cors');

const whitelist = [
  'https://papa-vueconf2019.azurewebsites.net',
  'http://localhost:8000',
  'http://localhost:9000',
  'http://localhost:9001',
];

const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = {
  cors,
  corsOptions,
};
