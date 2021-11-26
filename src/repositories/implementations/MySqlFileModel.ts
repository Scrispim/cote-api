
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { File } from "../../Entities/File";
import { db } from "../../config/sequelize";
import { ProductModel } from "./MySqlProductModel";


interface IFile extends File {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly size: number;
  readonly key: string;
  readonly url: string;
  readonly type: number;    
  readonly product_id: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date;
}

interface FileInstance extends Model<File>, IFile {}

type FileModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): FileInstance;
};

export const FileModel = db.define("file", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
      type: DataTypes.STRING,
    },
  size: {
      type: DataTypes.INTEGER,
  },
  key: {
      type: DataTypes.STRING,
  },
  url: {
      type: DataTypes.STRING,
  },
  type: {
      type: DataTypes.INTEGER,
  },
  product_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: { model: 'products', key: 'id' },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  deletedAt: {
      type: DataTypes.DATE,
  },
}) as FileModelStatic;

//FileModel.belongsTo(CompanyModel)

//FileModel.sync({force: true}).then(()=> {});




async function doStuff() {
  const instance = await FileModel.findByPk(1, {
    rejectOnEmpty: true,
  });
  console.log(instance.id);
}