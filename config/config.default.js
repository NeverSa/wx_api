'use strict';
const sequelizeConfig = require('./config.sequelize');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531706761266_8115';

  // add your config here
  config.middleware = [];

  config.sequelize = sequelizeConfig;
  
  return config;
};
