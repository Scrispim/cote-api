import { File } from "../../Entities/File";
import { IFileRepository } from "../../repositories/IFileRepository";
import { IFileRequestDTO } from "./FileDTO";

export class FileUseCase{

    constructor(
        private FileRepository: IFileRepository,
    ){}

    async getByProductId(product_id: number){
        return await this.FileRepository.getByProductId(product_id);
    }

    async save(data: IFileRequestDTO){
        console.log('[FileUseCase]');
        
        const file = new File(data);

        await this.FileRepository.save(file);

        return file;

    }
    
    async getById(company_id: number){
        return await this.FileRepository.findById(company_id);
    }

    async update(data: IFileRequestDTO, id: number): Promise<void>{
        const file = new File(data);
        await this.FileRepository.updateFile(file, id);
    }

}