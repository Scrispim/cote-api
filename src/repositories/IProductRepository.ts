import { Product } from "../Entities/Product";


export interface IProductRepository{

    getAll(page: number, perPage: number, description: string): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    save(Product: Product): Promise<void>;
    updateProduct(product: Product, id: number): Promise<void>;

}