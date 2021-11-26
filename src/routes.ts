import { request, response, Router } from "express"
import multer from "multer";
import multerConfig from "./config/multerConfig";
import { categoryController } from "./useCases/Category"
import { productController } from "./useCases/Product"
import { fileController } from "./useCases/File"

const router = Router()

router.get('/api/category/', (request, response) => {
    return categoryController.getAll(request, response);
})

router.get('/api/category/:id', (request, response) => {
    return categoryController.getById(request, response);
})

router.post('/api/category/', (request, response) => {
    return categoryController.save(request, response);
})

router.put('/api/category/:id', (request, response) => {
    return categoryController.update(request, response);
})


/* ========= product =============================================*/

router.get('/api/product/:page/:perpage/:description?', (request, response) => {
    return productController.getAll(request, response);
})

router.get('/api/product/:id', (request, response) => {
    return productController.getById(request, response);
})

router.post('/api/product/', (request, response) => {
    return productController.save(request, response);
})

router.put('/api/product/:id', (request, response) => {
    return productController.update(request, response);
})


/* ========= file =============================================*/

router.post('/api/file/', multer(multerConfig).single('file'), (request, response) => {
    console.log('config')
    try {
        return fileController.save(request, response);
    } catch (error) {
        return response.status(400).json({
            message: error.message || "Unexpected error.",
          });
    }
})

export { router }