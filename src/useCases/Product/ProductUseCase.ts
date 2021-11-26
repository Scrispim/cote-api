import { Product } from "../../Entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";
import { IProductRequestDTO } from "./ProductDTO";

export class ProductUseCase{

    constructor(
        private ProductRepository: IProductRepository,
    ){}

    async getAll(page: number, perPage: number, description: string){
        
        return await this.ProductRepository.getAll(page, perPage, description);
    }

    async save(data: IProductRequestDTO){
        console.log('[ProductUseCase]');
        
        const product = new Product(data);

        await this.ProductRepository.save(product);

        return product;

    }
    
    async getById(company_id: number){
        return await this.ProductRepository.findById(company_id);
    }

    async update(data: IProductRequestDTO, id: number): Promise<void>{
        const product = new Product(data);
        await this.ProductRepository.updateProduct(product, id);
    }

}