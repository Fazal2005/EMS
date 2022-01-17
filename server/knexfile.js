// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://cxxxxxxxyour_DB_urlxxxxxxxxx'
  },
  test: {
    client: 'pg',
    connection: 'postgres://cxxxxxxxyour_DB_urlxxxxxxxxx'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};