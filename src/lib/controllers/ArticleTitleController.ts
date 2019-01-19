import { inject, injectable } from "inversify";
import types from "../../core/core/Types";
import { IArticleTitleService } from "../../business/interface/IArticleTitleService";
import * as express from 'express';
import { IResource } from "../../entities/interface/IResource";
import { IArticleTitle } from "../../entities/interface/IArticleTitle";



@injectable()
export class ArticleTitleController{

    private _articleTitleService:IArticleTitleService;
    constructor(@inject(types.IArticleTitleService) private articleTitleService:IArticleTitleService){
        this._articleTitleService = articleTitleService;
    }
    removeResource(req:express.Request,res:express.Response,next:express.NextFunction){
        var id  = req.params.id;
        var resourceId = req.body.resouce||req.body.resourceId||req.body.data;
        this._articleTitleService.removeResource(id,resourceId).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
    addResource(req:express.Request,res:express.Response,next:express.NextFunction){
        var id  = req.params.id;
        var resource:IResource = req.body.resouce||req.body.data;
        this._articleTitleService.addResource(id,resource).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
    addChild(req:express.Request,res:express.Response,next:express.NextFunction){
        var id  = req.params.id;
        var data:IArticleTitle = req.body.articleTitle||req.body.data||req.body.item;
        this._articleTitleService.addChild(id,data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
    removeChild(req:express.Request,res:express.Response,next:express.NextFunction){
        var id  = req.params.id;
        var data:string = req.body.articleTitleId||req.body.data||req.body.itemId;
        this._articleTitleService.removeChild(id,data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
    changeParent(req:express.Request,res:express.Response,next:express.NextFunction){
        var id  = req.params.id;
        var newparentId = req.body.parent||req.body.parentId||req.body.data;
        this._articleTitleService.changeParent(id,newparentId).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
    getChildren(req:express.Request,res:express.Response,next:express.NextFunction){
        var id  = req.params.id;
        this._articleTitleService.getChildren(id).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
    Retrive(req:express.Request,res:express.Response,next:express.NextFunction){
        var filter = req.body.filter||req.body.data;
        this._articleTitleService.GetList(filter).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
    getByArticleId(req:express.Request,res:express.Response,next:express.NextFunction){
        var id= req.params.id;
        this._articleTitleService.getArticleTitlesByArticleId(id).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    Update(req:express.Request,res:express.Response,next:express.NextFunction){
        var id = req.params.id;
        var data = req.body.data||req.body.item;
        this._articleTitleService.Update(id,data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }

}