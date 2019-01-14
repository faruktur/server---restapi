import container from "../../ioc/Containers";
import { CategoryController } from "../../controllers/CategoryController";
import * as express from 'express';
import { AuthController } from "../../controllers/AuthController";


export class AuthRoutes{
    private route=express.Router();
    authController = container.get<AuthController>(AuthController);
    
    get routes(){
        this.route.post('/signInWithUsername',(req,res,next)=>{this.authController.LoginWithUsername(req,res,next)})

        return this.route;
    }

}