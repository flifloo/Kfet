"use strict";
module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define('Dish', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    maxIngredients: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxSauces: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: "Dishes"
  });
  Dish.associate = function(models) {
    Dish.hasMany(models.Command);
  };
  return Dish;
};
