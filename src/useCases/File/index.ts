import { MySqlFileRepository } from "../../repositories/implementations/MySqlFileRepository";
import { FileController } from "./FileController";
import { FileUseCase } from "./FileUseCase";

const mySqlFileRepository = new MySqlFileRepository();

const fileUseCase = new FileUseCase(
    mySqlFileRepository,
);

const fileController = new FileController(fileUseCase);

export {fileUseCase, fileController}
