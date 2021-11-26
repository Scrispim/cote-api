import { MySqlProductRepository } from "../../repositories/implementations/MySqlProductRepository";
import { ProductController } from "./ProductController";
import { ProductUseCase } from "./ProductUseCase";

const mySqlProductRepository = new MySqlProductRepository();

const productUseCase = new ProductUseCase(
    mySqlProductRepository,
);

const productController = new ProductController(productUseCase);

export {productUseCase, productController}
