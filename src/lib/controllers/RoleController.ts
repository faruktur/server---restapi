import { injectable, inject } from "inversify";
import { IRoleService } from "../../business/interface/IRoleService";
import types from "../../core/core/Types";

@injectable()
export class RoleController{
    List(req,res, next): any {
        var data  = req.body.data||req.body.role;
        this._roleService.GetList().then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }

    private _roleService:IRoleService;
    constructor(@inject(types.IRoleService) private roleService:IRoleService){
        this._roleService=roleService;
    }
    Create(req,res,next){
        var data  = req.body.data||req.body.role;
        this._roleService.Add(data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }
    

}