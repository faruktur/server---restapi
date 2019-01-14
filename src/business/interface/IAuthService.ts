import { ILoginModel } from "../../entities/interface/ILoginModel";

export interface IAuthService{
    LoginWithUsername(ILoginModel:ILoginModel):Promise<any>;
    LoginWithEmail(ILoginModel:ILoginModel):Promise<any>;
}