const cors = require('cors');

const whitelist = [
  'https://papa-heroes-vue.azurewebsites.net',
  'http://localhost:9626',
  'http://localhost:9627',
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
