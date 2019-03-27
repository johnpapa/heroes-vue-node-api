const recreateDatabase = require('./recreate-database');
const exit = require('./exit');

recreateDatabase()
  .then(() => {
    exit(`Completed successfully`);
  })
  .catch(error => {
    exit(`Completed with error ${JSON.stringify(error)}`);
  });
