module.exports = {
  development: {
    username: 'postgres',
    password: '123ifeco',
    database: 'intellichub',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: '123ifeco',
    database: 'intellichub_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
