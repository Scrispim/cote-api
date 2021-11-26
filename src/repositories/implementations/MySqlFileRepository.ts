import { File } from "../../Entities/File";
import { IFileRepository } from "../IFileRepository";
import { FileModel } from "./MySqlFileModel";
import { db } from "../../config/sequelize";
import query from "../sql/query";


export class MySqlFileRepository implements IFileRepository{

    async getByProductId(product_id: number): Promise<File[]>{

        const file = FileModel.findAll({
            where : {product_id: product_id}
        });

        return file;

    }

    async findById(id: number): Promise<File>{

        const file = FileModel.findByPk(id);

        return file;

    }

    async save(file: File): Promise<void>{
        
        
        const result = await FileModel.create(file);

        console.log(result);
    }

    async updateFile(file: File, id: number): Promise<void>{
                
        
        console.log(file)
        await FileModel.update(file, { where: { id: id } });

    }
    
}