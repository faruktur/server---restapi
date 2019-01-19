import { injectable, inject } from "inversify";
import { IRoleService } from "../../business/interface/IRoleService";
import types from "../../core/core/Types";
import * as express from 'express';

@injectable()
export class RoleController{
    private _roleService:IRoleService;
    constructor(@inject(types.IRoleService) private roleService:IRoleService){
        this._roleService=roleService;
    }

    List(req:express.Request,res:express.Response,next:express.NextFunction){
        var data  = req.body.data||req.body.role;
        this._roleService.GetList().then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
    Create(req:express.Request,res:express.Response,next:express.NextFunction){
        var data  = req.body.data||req.body.role;
        this._roleService.Add(data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
}