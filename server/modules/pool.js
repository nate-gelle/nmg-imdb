var pg = require('pg');
const Pool = pg.Pool;

const DATABASE_NAME = 'nmg_imdb';

var config = {
    database: 'nmg_imdb',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 1000
};

const pool = new Pool(config);

pool.on('connect', (client) => {
  console.log(`Connected to database ${DATABASE_NAME} from:`, client);
})

pool.on('error', (err, client) => {
  console.log(`Error with database connection from ${client}. Error: `, err);
  process.exit(-1);
})


module.exports = pool;