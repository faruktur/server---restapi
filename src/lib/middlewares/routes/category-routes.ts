import container from "../../ioc/Containers";
import { CategoryController } from "../../controllers/CategoryController";
import * as express from 'express';


export class CategoryRoutes{
    private route=express.Router();
    categoryController = container.get<CategoryController>(CategoryController);
    
    get routes(){
        this.route.get('/category/:id',(req,res,next)=>{this.categoryController.Retrieve(req,res,next);})
        this.route.post('/category',(req,res,next)=>{this.categoryController.Create(req,res,next);})
        this.route.put('/category/:id',(req,res,next)=>{this.categoryController.Update(req,res,next);})
        this.route.delete('/category/:id',(req,res,next)=>{this.categoryController.Delete(req,res,next);})
        
        
        
        this.route.get('/category/getParentCategories',(req,res,next)=>{this.categoryController.GetParentCategories(req,res,next);})
        this.route.post('/category/:id',(req,res,next)=>{this.categoryController.AddChild(req,res,next);})
        this.route.get('/category/getChildren/:id',(req,res,next)=>{this.categoryController.GetChildren(req,res,next);})
        this.route.post('/category/removeChild/:id',(req,res,next)=>{this.categoryController.RemoveChild(req,res,next);})
        return this.route;
    }

}