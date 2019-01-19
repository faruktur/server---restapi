import * as express from 'express';
import { IUserService } from '../../business/interface/IUserService';
import { inject, injectable } from 'inversify';
import types from '../../core/core/Types';
import { IUser } from '../../entities/interface/IUser';

@injectable()
export class UserController {


    private _userService: IUserService;
    public constructor(@inject(types.IUserService) private userService?: IUserService) {
        this._userService = this.userService;
    }
    Create(req: express.Request, res: express.Response, next: express.NextFunction) {
        var user: IUser = req.body.user || req.body.data;
        console.log('User Controller Create');
        this._userService.Add(user).then(result => {
            res.json({ success: true, result: result });
        }).catch(err => {
            res.json({ success: false, error: err });
        });
    }
    Get(req: express.Request, res: express.Response, next: express.NextFunction) {
        var filter = req.params.id;
        this._userService.Get(filter).then(result => {
            res.json({ success: true, result: result });
        }).catch(err => {
            res.json({ success: false, error: err });
        });
    }
    verifyEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
        var email: string = req.body.email || req.body.data||req.params.email;
         
        this._userService.emailVerify(email).then(result => {
            res.json({ success: true, result: result });
        }).catch(err => {
            res.json({ success: false, error: err });
        });
    }
    Register(req: express.Request, res: express.Response, next: express.NextFunction) {
        var user: IUser = req.body.user || req.body.data;
        console.log('User Controller Create',user);
        this._userService.register(user).then(result => {
            res.json({ success: true, result: result });
        }).catch(err => {
            res.json({ success: false, error: err });
        });
    }
    updateProfile(req: express.Request, res: express.Response, next: express.NextFunction){
        var data = req.body.data||req.body.profile||req.body.user;
        var id = req.params.id||req.body.id;
        this._userService.updateProfile(id,data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    updateAccount(req: express.Request, res: express.Response, next: express.NextFunction){
        var data = req.body.data||req.body.profile||req.body.user;
        var id = req.params.id||req.body.id;
        this._userService.updateAccount(id,data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    updateUser(req: express.Request, res: express.Response, next: express.NextFunction){
        var data = req.body.data||req.body.profile||req.body.user;
        var id = req.params.id;
        this._userService.updateUser(id,data).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    addRole(req: express.Request, res: express.Response, next: express.NextFunction){
        var roleid= req.body.data||req.body.roleId||req.body.role;
        var id = req.params.id;
        this._userService.addRole(id,roleid).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    removeRole(req: express.Request, res: express.Response, next: express.NextFunction){
        var roleid = req.body.data||req.body.roleId||req.body.role;
        var id = req.params.id;
        this._userService.removeRole(id,roleid).then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }
    

}