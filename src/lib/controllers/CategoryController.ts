import { inject, injectable } from "inversify";
import { ICategoryService } from "../../business/interface/ICategoryService";
import types from "../../core/core/Types";
import * as express from 'express';

@injectable()
export class CategoryController{

    private _categoryService:ICategoryService;
    public constructor(@inject(types.ICategoryService) private categoryService:ICategoryService){
        this._categoryService=categoryService;
    }
    Create(req:express.Request,res:express.Response,next:express.NextFunction){
        var data = req.body.data||req.body.category;
        this._categoryService.Add(data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
}