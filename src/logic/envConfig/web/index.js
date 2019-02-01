
const common = {
};

const dev = {
  ...common,
  url: 'http://server-dev-b882c3a2621da1a9.elb.us-east-1.amazonaws.com/inx/api/1.0',
  DATA_FEED_URL: 'http://server-dev-b882c3a2621da1a9.elb.us-east-1.amazonaws.com/inx/api/1.0/trades',
  SOCKET_IO_URL: 'http://server-dev-b882c3a2621da1a9.elb.us-east-1.amazonaws.com',
}
const prod = {
  ...common,
  url: 'http://ec2-34-235-153-67.compute-1.amazonaws.com/inx/api/1.0',
  DATA_FEED_URL: 'http://ec2-34-235-153-67.compute-1.amazonaws.com/inx/api/1.0/trades',
  SOCKET_IO_URL: 'http://ec2-34-235-153-67.compute-1.amazonaws.com',
}
const local = {
  ...common,
  url: 'http://localhost:3060/inx/api/1.0',
  DATA_FEED_URL: 'http://localhost:3060/inx/api/1.0/trades',
  SOCKET_IO_URL: 'http://localhost:3060',
}

const configByEnv = {
  'development': dev,
  'production': prod,
  'local': local
}

const config = function (env) {
  return configByEnv[env]
}

module.exports = config;
