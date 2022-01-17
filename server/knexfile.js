// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://ekbkzdvj:4FKUXKLKeP8sLrJPlnsJ87L5SOJlVTYU@tyke.db.elephantsql.com/ekbkzdvj'
  },
  test: {
    client: 'pg',
    connection: 'postgres://ekbkzdvj:4FKUXKLKeP8sLrJPlnsJ87L5SOJlVTYU@tyke.db.elephantsql.com/ekbkzdvj'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};