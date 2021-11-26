import { Category } from "../Entities/Category";


export interface ICategoryRepository{

    getAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    save(Category: Category): Promise<void>;
    updateCategory(category: Category, id: number): Promise<void>;

}