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
    Get(req: express.Request, res: express.Response, next: express.NextFunction) {
        var filter = req.params.id;
        this._userService.Get(filter).then(result => {
            res.json({ success: true, result: result });
        }).catch(err => {
            res.json({ success: false, error: err });
        });
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
    Register(req: express.Request, res: express.Response, next: express.NextFunction) {
        var user: IUser = req.body.user || req.body.data;
        console.log('User Controller Create',user);
        this._userService.register(user).then(result => {
            res.json({ success: true, result: result });
        }).catch(err => {
            res.json({ success: false, error: err });
        });
    }
    verifyEmail(req: express.Request, res: express.Response, next: express.NextFunction){
        this._userService.emailVerify("faruktur_@hotmail.com").then(result=>{
            res.json({success:true,result:result});
        }).catch(err=>{
            res.json({success:false,error:err});
        })
    }

}