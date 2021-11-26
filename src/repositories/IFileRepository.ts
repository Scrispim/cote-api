import { File } from "../Entities/File";


export interface IFileRepository{

    getByProductId(product_id: number): Promise<File[]>;
    findById(id: number): Promise<File>;
    save(File: File): Promise<void>;
    updateFile(file: File, id: number): Promise<void>;

}