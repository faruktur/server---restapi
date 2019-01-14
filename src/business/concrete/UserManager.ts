import { User } from "../../entities/User";
import { injectable, inject } from "inversify";
import { IUserDal } from "../../data-access-layer/interface/IUserDal";
import types from '../../core/core/Types';
import { IProfile } from "../../entities/interface/IProfile";
import { IAccount } from "../../entities/interface/IAccount";
import { IUser } from "../../entities/interface/IUser";
import { IRoleDal } from "../../data-access-layer/interface/IRoleDal";
import { Account } from "../../entities/Account";
import { IUserService } from "../interface/IUserService";
import { filterObject } from "../../core/dataAccess/IEntityRepository";
import { Profile } from "../../entities/Profile";


@injectable()
export class UserManager implements IUserService {



    
    _userDal: IUserDal;
    _roleDal : IRoleDal;
    public constructor(@inject(types.IUserDal) private IUserDal: IUserDal,
    @inject(types.IRoleDal) private IRoleDal:IRoleDal) 
    
    {
        this._userDal = this.IUserDal;
        this._roleDal = this.IRoleDal;
    }


    register(data:IUser): Promise<any> {
        return new Promise((resolve,reject)=>{
            var user:User = data as User;
            
            this.IRoleDal.Get({where:{role:"User"}}).then(role=>{
                user.profile.emailVerified=true;// TODO:: FALSE , change to true with e-mail
                // user.account.roles.push(role);
                this._userDal.Add(user).then(result=>{
                    resolve(result);
                }).catch(err=>{
                    reject("userdal Hata");
                }); 
            }).catch(err=>{
                reject("RoleDal Hata")
            })
        });
    }
    
    emailVerify(email: string): Promise<User> {
        return new Promise((resolve, reject) => {
            var filter: filterObject<User> = {
                where: {
                    account:
                    {
                        username: "", password: "", roles: []
                    },
                    profile: { email:email } as Profile
                }
            };


            this._userDal.Get(filter).then(user=>{
                console.log('email verify GETUSER ',user);
                if(user){
                    user.profile.emailVerified=true;
                   this._userDal.Update(user.id,user).then(result=>{
                       resolve(result);
                   }).catch(err=>{
                       reject("update error");
                   });
                }else{
                    reject("Email adresine ait kullanıcı bulunamadı.");
                }
            }).catch(err=>{
                reject("find error");
            })
        });
    }   
    updateProfile(id: string, profile: IProfile): Promise<IUser> {
        return new Promise((resolve, reject) => {
            this._userDal.Get({where:{ id: id }}).then(user => {
                if (user) {
                    Object.assign(user.profile,profile);
                    this._userDal.Update(id,user).then(result=>{
                        resolve(result);
                    });
                }else{
                    reject("Kullanıcı bilgisine ulaşılamadı.");      
                }
            })
        });
    }
    updateAccount(id: string, account: IAccount): Promise<IUser> {
        return new Promise((resolve, reject) => {
            this._userDal.Get({where:{ id: id }}).then(user => {
                if (user) {
                    user.account = account as Account;
                    this._userDal.Update(id,user).then(result=>{
                        resolve(result);
                    });
                }else{
                    reject("Kullanıcı bilgisine ulaşılamadı.");      
                }
            })
        });
    }
    updateUser(id: string, user: IUser): Promise<any> {
        return new Promise((resolve, reject) => {
            this._userDal.Get({where:{ id: id }}).then(_user => {
                if (user) {
                    Object.assign(_user, user);
                    this._userDal.Update(id,_user).then(result=>{
                        resolve(result);
                    }).catch(err=>{
                        reject(err);
                    });
                }else{
                    reject("Kullanıcı bilgisine ulaşılamadı.");
                }
            }).catch(err=>{
                reject(err);
            });
        });
    }
    addRole(id:string,roleid:string){
        return new Promise((resolve,reject)=>{
            this._roleDal.Get({where:{id:roleid}}).then(role=>{
                if(role){
                    this._userDal.Get({where:{id:id}}).then(user=>{
                       if(user){
                        user.account.roles.push(role);
                        this._userDal.Update(id,user).then(result=>{
                            resolve(result);
                        }).catch(err=>{
                            reject(err);
                        });
                       }else{
                           reject("Kullanıcı bilgisine ulaşılamadı.")
                       }
                    }).catch(err=>{
                        reject(err);
                    });
                }
            }).catch(err=>{
                reject(err);
            });
        });
    }
    removeRole(id:string,roleid:string){
        return new Promise((resolve,reject)=>{
            this._roleDal.Get({where:{id:roleid}}).then(role=>{
                if(role){
                    this._userDal.Get({where:{id:id}}).then(user=>{
                       if(user){
                        var i = user.account.roles.indexOf(role);
                        user.account.roles.splice(i,1);
                        this._userDal.Update(id,user).then(result=>{
                            resolve(result);
                        }).catch(err=>{
                            reject(err);
                        });
                       }else{
                           reject("Kullanıcı bilgisine ulaşılamadı.")
                       }
                    }).catch(err=>{
                        reject(err);
                    });
                }
            }).catch(err=>{
                reject(err);
            });
        });
    }
    sendPasswordToEmail(email:string){
        return new Promise((resolve,reject)=>{
            var partialUser:User = {profile:{email:email}} as User;
             this._userDal.Get({where:partialUser}).then(user=>{
                 if(user){
                     var accountInfo = user.account;
                     //TODO :: SEND EMAIL ACCOUNT INFO
                     resolve("Gerekli bilgiler e-mail adresine gönderildi.");
                 }else{
                     reject("Kullanıcı bilgisine ulaşılamadı.");
                 }
             });
        })
    }













    // Standart
    Get(filter?: any): Promise<User> {
        return this._userDal.Get(filter);
    }
    GetList(filter?: any): Promise<User[]> {
        return this._userDal.List(filter);
    }
    Add(object: User): Promise<any> {
        return this._userDal.Add(object);
    }
    Update(id: string, object: User): Promise<any> {
        return this._userDal.Update(id, object);
    }
    Delete(id: string): Promise<any> {
        return this._userDal.Delete(id);
    }



}