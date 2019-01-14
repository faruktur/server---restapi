import container from "../../ioc/Containers";
import { CategoryController } from "../../controllers/CategoryController";
import * as express from 'express';


export class CategoryRoutes{
    private route=express.Router();
    categoryController = container.get<CategoryController>(CategoryController);
    
    get routes(){
        this.route.post('/category',(req,res,next)=>{this.categoryController.Create(req,res,next);})

        return this.route;
    }

}