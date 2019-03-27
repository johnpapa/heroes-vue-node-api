// @ts-check
// require('dotenv').config();

module.exports = {
  endpoint: process.env.CORE_API_URL,
  masterKey: process.env.CORE_API_KEY,

  databaseDefName: 'hero-db',
  settingsContainer: 'settings',
  heroContainer: 'heroes',
  villainContainer: 'villains',
};
