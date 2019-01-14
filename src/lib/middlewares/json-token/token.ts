import * as jwt from 'jsonwebtoken';
import { IUser } from '../../../entities/interface/IUser';
import { secret } from './secret';
export class JWTManager {
    constructor() {

    }

    public static getToken(userData: IUser): string {
        var payload = {data:userData}
        var _token:string = null;
        
        return jwt.sign(payload,"secret");
    }
    public static verifyToken(token:string):any{
        var retvalue:{verify:boolean,data:any};
        jwt.verify(token,secret.key,function(err,decoded){
            if(err) retvalue.verify = false;
            else{
                retvalue.verify=true;
                retvalue.data=decoded;
            }
        });
        return retvalue;
    }
}