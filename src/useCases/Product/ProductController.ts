import { privateDecrypt } from "crypto";
import { request, Request, Response } from "express";
import { resourceUsage } from "process";
import { ProductUseCase } from "./ProductUseCase";

export class ProductController {

    constructor(
        private ProductUserCase : ProductUseCase,
    ){}

   async save(request: Request, response: Response): Promise<Response>{

        try {

            console.log(request.body)
            const data = await this.ProductUserCase.save(request.body)

            return response.status(200).json(data);

        } catch (error) {
            
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
        
   }

   async getAll(request: Request, response: Response): Promise<Response>{
   
    try {
        const {page, perpage, description} = request.params;
        //const description = request.body;

        var filter = '';
        if(description == undefined) filter = ''
        else filter = description;
        
        console.log(filter)

        const data = await this.ProductUserCase.getAll(parseInt(page), parseInt(perpage), filter);

        return response.status(200).json(data);

    } catch (error) {
        return response.status(400).json({
            message: error.message || 'Unexpected error.'
        })
    }
}

   async getById(request: Request, response: Response): Promise<Response>{
   
        const id = request.params.id;

        try {
            
            const data = await this.ProductUserCase.getById(parseInt(id));

            return response.status(200).json(data);

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    async update(request: Request, response: Response): Promise<Response>{

        try {
        
            const product = await this.ProductUserCase.getById(parseInt(request.params.id));
           
            if(product){
               
                await this.ProductUserCase.update(request.body, parseInt(request.params.id))
                
                return response.status(200).send(); 
            }
            else{
                return response.status(400).json({
                    message: 'Productation not found.'
                })   
            }
                      

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })    
        }

    }

}