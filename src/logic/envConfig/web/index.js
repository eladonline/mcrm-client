const common = {};

const dev = {
  ...common,
  url: 'http://localhost:8080',
  env: 'development'
};
const prod = {
  ...common,
  url: 'https://fcc-frstapp.herokuapp.com/',
  env: 'deployment'
};
const local = {
  ...common,
  url: 'http://localhost:8080',
  env: 'local'
};

const configByEnv = {
  development: dev,
  production: prod,
  local: local
};

const config = function(env) {
  return configByEnv[env];
};

module.exports = config;
