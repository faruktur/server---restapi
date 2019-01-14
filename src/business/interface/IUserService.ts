import { User } from "../../entities/User";
import { IServiceBase } from "./IServiceBase";
import { promises } from "fs";
import { Profile } from "../../entities/Profile";
import { Account } from "../../entities/Account";
import { IUser } from "../../entities/interface/IUser";
import { IProfile } from "../../entities/interface/IProfile";
import { IAccount } from "../../entities/interface/IAccount";
import { BusinessLayerResult } from "../models/BusinessLayerResult";

export interface IUserService extends IServiceBase<IUser>{
    
    register(user:IUser):Promise<IUser>;
    emailVerify(email:string): Promise<User> ;
    updateProfile(id:string,profile:IProfile):Promise<IUser>;
    updateAccount(id:string,account:IAccount):Promise<IUser>;
    updateUser(id:string,user:IUser):Promise<IUser>;
    
}