import { Product } from "../../Entities/Product";
import { IProductRepository } from "../IProductRepository";
import { ProductModel } from "./MySqlProductModel";
import { db } from "../../config/sequelize";
import query from "../sql/query";
import { File } from "../../Entities/File";
import { CategoryModel } from "./MySqlCategoryModel";


export class MySqlProductRepository implements IProductRepository{

    async getAll(page: number, perPage: number, description: string): Promise<any>{

        var where = '';
        if(perPage < 15){
            perPage = 15;
        }        

        console.log('descricao: ',description)
        if(description.length > 0){
            where = " where Product.name like '%" + description + "%'";
        }

        const offset = (page-1) * perPage;
        const limit = perPage;

        var [metadata] = await db.query(`
        SELECT 
            Product.id, Product.name, Product.description, Product.price_new, Product.price_old, Product.quantity, Product.category_id, Product.createdAt, Product.updatedAt, Product.deletedAt,
            Category.id, Category.description as category, Category.createddAt, Category.updateddAt, Category.deletedAt
        FROM Products AS Product  
        inner join Categories AS Category ${where} LIMIT ${offset}, ${limit};`)

       var [results] = await db.query(`
        SELECT count(*) as Total
        FROM Products AS Product  
        inner join Categories AS Category ${where}; `)

        // const product = await ProductModel.findAndCountAll({
        //     limit: perPage,
        //     offset: (page-1) * perPage
        // });

        var data = {
            rows:metadata,
            count:results
        }

        console.log(data)
        return data;

    }

    async findById(id: number): Promise<Product>{

        const product = ProductModel.findByPk(id);

        return product;

    }

    async save(product: Product): Promise<void>{
        
        
        const result = await ProductModel.create(product);

        console.log(result);
    }

    async updateProduct(product: Product, id: number): Promise<void>{
                
        
        console.log(product)
        await ProductModel.update(product, { where: { id: id } });

    }
    
}