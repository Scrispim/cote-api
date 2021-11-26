import { MySqlCategoryRepository } from "../../repositories/implementations/MySqlCategoryRepository";
import { CategoryController } from "./CategoryController";
import { CategoryUseCase } from "./CategoryUseCase";

const mySqlCategoryRepository = new MySqlCategoryRepository();

const categoryUseCase = new CategoryUseCase(
    mySqlCategoryRepository,
);

const categoryController = new CategoryController(categoryUseCase);

export {categoryUseCase, categoryController}
