import container from "../../ioc/Containers";
import { CategoryController } from "../../controllers/CategoryController";
import * as express from 'express';
import { RoleController } from "../../controllers/RoleController";


export class RoleRoutes{
    private route=express.Router();
    roleController = container.get<RoleController>(RoleController);
    
    get routes(){
        this.route.post("/roles/",(req,res,next)=>{this.roleController.Create(req,res,next)});
        this.route.get("/roles/",(req,res,next)=>{this.roleController.List(req,res,next)})
        return this.route;
    }

}