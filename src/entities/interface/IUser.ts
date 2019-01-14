import { Role } from "../Role";
import { IAccount } from "./IAccount";
import { IProfile } from "./IProfile";

 

export interface IUser{

    id?:string;
    account?:IAccount,
    profile?:IProfile
    
}