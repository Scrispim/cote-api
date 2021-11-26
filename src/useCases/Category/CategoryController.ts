import { privateDecrypt } from "crypto";
import { request, Request, Response } from "express";
import { resourceUsage } from "process";
import { CategoryUseCase } from "./CategoryUseCase";

export class CategoryController {

    constructor(
        private CategoryUserCase : CategoryUseCase,
    ){}

    async getAll(request: Request, response: Response): Promise<Response>{
   
        try {
            
            const data = await this.CategoryUserCase.getAll();
    
            return response.status(200).json(data);
    
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

   async save(request: Request, response: Response): Promise<Response>{

        try {

            const data = await this.CategoryUserCase.save(request.body)

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
            
            const data = await this.CategoryUserCase.getById(parseInt(id));

            return response.status(200).json(data);

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

    async update(request: Request, response: Response): Promise<Response>{

        try {
        
            const category = await this.CategoryUserCase.getById(parseInt(request.params.id));
           
            if(category){
               
                await this.CategoryUserCase.update(request.body, parseInt(request.params.id))
                
                return response.status(200).send(); 
            }
            else{
                return response.status(400).json({
                    message: 'Categoryation not found.'
                })   
            }
                      

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })    
        }

    }

}