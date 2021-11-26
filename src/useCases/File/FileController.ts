import { Request, Response } from "express";
import { resourceUsage } from "process";
import { FileUseCase } from "./FileUseCase";
import multer from "multer";
import multerConfig from "../../config/multerConfig";
var fs = require('fs');


//Convertendo binario em arquivo
function base64_decode(base64str, fileName) {
    var bitmap = new Buffer(base64str, 'base64');
    fs.writeFileSync('src/temp/' + fileName + '', bitmap, 'binary', function (err) {
        if (err) {
            console.log('Conversao com erro');
        }
    });
}

//Convertendo arquivo em binário
function base64_encode(filePath) {
    var bitmap = fs.readFileSync(filePath);
    return bitmap.toString('base64');
}


export class FileController {

    constructor(
        private FileUserCase: FileUseCase,
    ) { }

    async save(request: Request, response: Response): Promise<Response> {

        try {

            console.log(request.file);
            console.log(request.body);

            const { originalname: name, size } = request.file;

            const { description, type, product_id } = request.body;

            //console.log(base64_encode(request.file['path']))

            const data = await this.FileUserCase.save({
                name,
                description,
                size,
                key: request.file['key'],
                url: request.file['path'],
                type,
                product_id,
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            })

            return response.status(200).json(request.body);

        } catch (error) {

            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }

    async getByProductId(request: Request, response: Response): Promise<Response> {

        try {
            const product_id = request.params.product_id;

            const data = await this.FileUserCase.getByProductId(parseInt(product_id));

            return response.status(200).json(data);

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    async getById(request: Request, response: Response): Promise<Response> {

        const id = request.params.id;

        try {

            const data = await this.FileUserCase.getById(parseInt(id));

            return response.status(200).json(data);

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    async update(request: Request, response: Response): Promise<Response> {

        try {

            const file = await this.FileUserCase.getById(parseInt(request.params.id));

            if (file) {

                await this.FileUserCase.update(request.body, parseInt(request.params.id))

                return response.status(200).send();
            }
            else {
                return response.status(400).json({
                    message: 'Fileation not found.'
                })
            }


        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }

}

