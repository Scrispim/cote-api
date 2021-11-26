
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { Category } from "../../Entities/Category";
import { ProductModel } from "./MySqlProductModel";
import { db } from "../../config/sequelize";

interface ICategory extends Category {
  readonly id: number;
  readonly description: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
  }

interface CategoryInstance extends Model<Category>, ICategory {}

type CategoryModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): CategoryInstance;
  };

export const CategoryModel = db.define("Category", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  }, 
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
  }) as CategoryModelStatic;

  CategoryModel.hasMany(ProductModel, {
    sourceKey: "id",
    foreignKey: "category_id",
    as: "products_ibfk_1", // this determines the name in `associations`!
  });

  //CategoryModel.sync({force: true}).then(()=> {});

  CategoryModel.belongsTo(ProductModel);
  
  async function doStuff() {
    const instance = await CategoryModel.findByPk(1, {
      rejectOnEmpty: true,
    });
    console.log(instance.id);
  }
