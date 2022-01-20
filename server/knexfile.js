// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://xxxxxxYOUR_DB_URLxxxxxxxxxx'
  },
  test: {
    client: 'pg',
    connection: 'postgres://xxxxxxxxYOUR_DB_URLxxxxxxxx'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
