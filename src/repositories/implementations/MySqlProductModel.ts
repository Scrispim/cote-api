
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { Product } from "../../Entities/Product";
import { db } from "../../config/sequelize";
import { FileModel } from "./MySqlFileModel";
import { CategoryModel } from "./MySqlCategoryModel";
import { Category } from "../../Entities/Category";



interface IProduct extends Product {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly quantity: number;
  readonly category_id: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
}

interface ProductInstance extends Model<Product>, IProduct { }

type ProductModelStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): ProductInstance;
};

export const ProductModel = db.define("Product", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price_new: {
    type: DataTypes.DECIMAL(18, 2),
  },
  price_old: {
    type: DataTypes.DECIMAL(18, 2),
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  category_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: { model: 'categories', key: 'id' },
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
}) as ProductModelStatic;

//ProductModel.sync({force: true}).then(()=> {});


interface ProductAttributes {
  // ...
  category?: Category
}

export function initProduct(sequalize: Sequelize) {
  // ...
  // @ts-ignore
  Product.associate = ({ Category }: { Category: CategoryModel }) => {
    ProductModel.belongsTo(Category);
  };
  return Product;
};

//ProductModel.hasOne(CategoryModel);

//ProductModel.belongsTo(CategoryModel, { foreignKey: 'category_id', as: 'categories' })

  async function doStuff() {
    const instance = await ProductModel.findByPk(1, {
      rejectOnEmpty: true,
    });
    console.log(instance.id);

    //ProductModel.belongsTo(CategoryModel, { foreignKey: 'category_id', as: 'categories' })

  }

  //CategoryModel.hasMany(ProductModel,{foreignKey : 'userId'});

  //Product.hasOne(Category, {as: 'categories', foreignKey: 'category_id'});
