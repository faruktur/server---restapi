
import * as express from 'express';

import  {UserController} from  '../../controllers/UserController';
import container from '../../ioc/Containers';
import { AuthController } from '../../controllers/AuthController';
import { ArticleTitleController } from '../../controllers/ArticleTitleController';

export class ArticleTitleRoutes{

    private route=express.Router();
    private _articleTitleController = container.get<ArticleTitleController>(ArticleTitleController); 
       
    constructor(){ 
        
    }
    
    get routes(){
        this.route.post('/articleTitles',(req,res,next)=>{this._articleTitleController.Retrive(req,res,next)});
        this.route.put('/articleTitles/:id',(req,res,next)=>{this._articleTitleController.Update(req,res,next)});
        this.route.get('/articleTitles/article/:id',(req,res,next)=>{this._articleTitleController.getByArticleId(req,res,next)});
        
        this.route.post('/articleTitles/removeResource/:id',(req,res,next)=>{this._articleTitleController.removeResource(req,res,next)});
        this.route.post('/articleTitles/addResource/:id',(req,res,next)=>{this._articleTitleController.addResource(req,res,next)});
        
        this.route.post('/articleTitles/addChild/:id',(req,res,next)=>{this._articleTitleController.addChild(req,res,next)});
        this.route.post('/articleTitles/removeChild/:id',(req,res,next)=>{this._articleTitleController.removeChild(req,res,next)});
       
        this.route.get('/articleTitles/getChildren/:id',(req,res,next)=>{this._articleTitleController.getChildren(req,res,next)});
        this.route.post('/articleTitles/changeParent/:id',(req,res,next)=>{this._articleTitleController.changeParent(req,res,next)});


        
        return this.route;
    }
    
}
