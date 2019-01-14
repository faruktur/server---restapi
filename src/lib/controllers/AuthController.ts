import { injectable, inject } from "inversify";
import types from "../../core/core/Types";
import { IAuthService } from "../../business/interface/IAuthService";
import * as express from 'express';
import { ILoginModel } from "../../entities/interface/ILoginModel";
import { JWTManager } from "../middlewares/json-token/token";
@injectable()
export class AuthController{
    private _authService:IAuthService
    constructor(@inject(types.IAuthService) private authService:IAuthService
    ){
        this._authService=authService;
    }

    async LoginWithUsername(req:express.Request,res:express.Response,next:express.NextFunction){
        var data:ILoginModel = req.body.data || req.body.login;
        console.log("Auth Controller loginwith username");
        this._authService.LoginWithUsername(data).then(result=>{
            //GENERATE TOKEN
            var token = JWTManager.getToken(result);
            res.json({success:true,token:token,data:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        });
    }


    public static isAuthenticated(req:express.Request,res:express.Response,next:express.NextFunction){
        var token  = req.body.token;
        var verifyResult = JWTManager.verifyToken(token);
        if(verifyResult.verify){
            next();
        }else{
            res.json({success:false,error:"Token geçersiz."})
        }
    }

}