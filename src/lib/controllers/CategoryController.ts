import { inject, injectable } from "inversify";
import { ICategoryService } from "../../business/interface/ICategoryService";
import types from "../../core/core/Types";
import * as express from 'express';

@injectable()
export class CategoryController{
    Retrieve(req:express.Request,res:express.Response,next:express.NextFunction){
        var filter = req.body.filter;
        var id = req.params.id;
        if(id) filter.where.id=id;
        
        this._categoryService.GetList(filter).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }

    private _categoryService:ICategoryService;
    public constructor(@inject(types.ICategoryService) private categoryService:ICategoryService){
        this._categoryService=categoryService;
    }
    GetParentCategories(req:express.Request,res:express.Response,next:express.NextFunction){
        
        this._categoryService.GetParentCategories().then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
    Create(req:express.Request,res:express.Response,next:express.NextFunction){
        var data = req.body.data||req.body.category;
        this._categoryService.Add(data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    Update(req:express.Request,res:express.Response,next:express.NextFunction){
        var data = req.body.data||req.body.category;
        var id = req.body.id||data.id;
        this._categoryService.Update(id,data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    Delete(req:express.Request,res:express.Response,next:express.NextFunction){
         
        var id = req.body.id||req.params.id;
        this._categoryService.Delete(id).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    GetChildren(req:express.Request,res:express.Response,next:express.NextFunction){
        var id = req.body.data||req.body.id||req.params.id;
        this._categoryService.getChildren(id).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    AddChild(req:express.Request,res:express.Response,next:express.NextFunction){
        var data = req.body.data||req.body.category;
        var id = req.body.parentId||req.body.id;
        this._categoryService.addChild(id,data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    RemoveChild(req:express.Request,res:express.Response,next:express.NextFunction){
        var child = req.body.childId||req.body.id;
        var parent = req.body.parentId||req.body.id;
        this._categoryService.removeChild(child,parent).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
}