import { Category } from "../../Entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { ICategoryRequestDTO } from "./CategoryDTO";

export class CategoryUseCase{

    constructor(
        private CategoryRepository: ICategoryRepository,
    ){}

    async getAll(){
        return await this.CategoryRepository.getAll();
    }

    async save(data: ICategoryRequestDTO){
        console.log('[CategoryUseCase]');

        const category = new Category(data);

        await this.CategoryRepository.save(category);

        return category;

    }

    async getById(company_id: number){
        return await this.CategoryRepository.findById(company_id);
    }

    async update(data: ICategoryRequestDTO, id: number): Promise<void>{
        const category = new Category(data);
        await this.CategoryRepository.updateCategory(category, id);
    }

}