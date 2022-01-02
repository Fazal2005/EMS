// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://ekxxxxxYour_DB_URL'
  },
  test: {
    client: 'pg',
    connection: 'postgres://ekxxxxxYour_DB_URL'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};