'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      primaryKey: true
    }
  }, {
    tableName: "Services"
  });
  Service.associate = function(models) {
    // associations can be defined here
    Service.hasOne(models.User, {
      as: "sandwich1"
    });
    Service.hasOne(models.User, {
      as: "sandwich2"
    });
    Service.hasOne(models.User, {
      as: "sandwich3"
    });
    Service.hasOne(models.User, {
      as: "commi1"
    });
    Service.hasOne(models.User, {
      as: "commi2"
    })
  };
  return Service;
};