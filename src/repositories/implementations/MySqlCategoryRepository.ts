import { Category } from "../../Entities/Category";
import { ICategoryRepository } from "../ICategoryRepository";
import { CategoryModel } from "./MySqlCategoryModel";
import { db } from "../../config/sequelize";
import query from "../sql/query";


export class MySqlCategoryRepository implements ICategoryRepository{

    private Category: Category[] = [];

    async getAll(): Promise<Category[]>{

        const product = CategoryModel.findAll();

        return product;

    }

    async findById(id: number): Promise<Category>{

        const category = this.Category.find(category => category.id == id);

        return category;

    }

    async save(category: Category): Promise<void>{
                
        const result = await CategoryModel.create(category);

        console.log(result);
    }

    async updateCategory(category: Category, id: number): Promise<void>{
                
        
        console.log(category)
        await CategoryModel.update(category, { where: { id: id } });


    }
    
}