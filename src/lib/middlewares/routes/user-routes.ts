
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
        this.route.put('/users/:id',(req,res,next)=>this._userController.updateUser(req,res,next));
        this.route.put('/users/:id',(req,res,next)=>this._userController.updateAccount(req,res,next));
        this.route.put('/users/:id',(req,res,next)=>this._userController.updateProfile(req,res,next));
        
        this.route.post('/users/addRole/:id',(req,res,next)=>this._userController.addRole(req,res,next));
        this.route.post('/users/removeRole/:id',(req,res,next)=>this._userController.removeRole(req,res,next));


        
        this.route.post('/users/verify/:email',(req,res,next)=>this._userController.verifyEmail(req,res,next));
        this.route.post('/users/register',(req,res,next)=>this._userController.Register(req,res,next));
        return this.route;
    }
    
}
