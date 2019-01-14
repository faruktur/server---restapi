
import * as express from 'express';

import  {UserController} from  '../../controllers/UserController';
import container from '../../ioc/Containers';
import { AuthController } from '../../controllers/AuthController';

export class UserRoutes{

    private route=express.Router();
    private _userController = container.get<UserController>(UserController); 
       
    constructor(){ 
        
    }
    
    get routes(){
        this.route.get('/users/:id',(req,res,next)=>this._userController.Get(req,res,next));
        this.route.post('/users/',(req,res,next)=>this._userController.Create(req,res,next));
        this.route.post('/users/verify',(req,res,next)=>this._userController.verifyEmail(req,res,next));
        this.route.post('/users/register',(req,res,next)=>this._userController.Register(req,res,next));
        return this.route;
    }
    
}
