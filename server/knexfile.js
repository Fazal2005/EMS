// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://ekbkzdvj:4FKUXKLKeP8sLrJPlxxxxxYour_DB_linkxxxxx'
  },
  test: {
    client: 'pg',
    connection: 'postgres://ekbkzdvj:4FKUXKLKeP8sLrJPlxxxxxYour_DB_linkxxxxx'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};