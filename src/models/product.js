'use strict';
const {Model} = require('sequelize');
const Category = require('./category')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {foreignKey: 'category_id', as: 'categories'})
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price_new: DataTypes.NUMBER,
    price_old: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER,
    category_id: DataTypes.NUMBER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};