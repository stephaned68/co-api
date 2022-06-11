const config = require('config');
const trace = require('./trace');

let dbConfig = config.get('db');
if (dbConfig === {}) {
  dbConfig.host = process.env.DB_HOST;
  dbConfig.port = process.env.DB_PORT;
  dbConfig.user = process.env.DB_USER;
  dbConfig.password = process.env.DB_PASS;
  dbConfig.database = process.env.DB_NAME;
}

const knex = require('knex')({
  client: 'mysql',
  connection: dbConfig,
});

knex.on('query', function (debugData) {
  trace.output(debugData);
});

module.exports = knex;
