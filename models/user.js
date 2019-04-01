'use strict';
const hashPassword = require('../helpers/bcrypt').hashPassword
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    Role : DataTypes.STRING
  }, {
    hooks : {
      beforeCreate : (user) => {
        user.password = hashPassword(user.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};