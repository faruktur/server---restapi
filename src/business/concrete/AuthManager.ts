import { IAuthService } from "../interface/IAuthService";
import { IUserDal } from "../../data-access-layer/interface/IUserDal";
import { injectable, inject } from "inversify";
import types from "../../core/core/Types";
import { ILoginModel } from "../../entities/interface/ILoginModel";
import { filterObject } from "../../core/dataAccess/IEntityRepository";
import { User } from "../../entities/User";
import { Profile } from "../../entities/Profile";


@injectable()
export class AuthManager implements IAuthService {


    private _userDal: IUserDal;
    constructor(@inject(types.IUserDal) private UserDal: IUserDal) {
        this._userDal = UserDal;
    }

    LoginWithUsername(loginModel:ILoginModel): Promise<any> {
        return new Promise((resolve, reject) => {
            var filter: filterObject<User> = { where: { account: { username: loginModel.username, password: loginModel.password} } };

            this._userDal.Get(filter).then(user => {
                if (user) {
                    resolve(user);
                } else {
                    reject({message:"Kullanıcı adı yada şifre hatalı.",object:user});
                }
            }).catch(err => {
                reject(err);
            });
        })
    }
    LoginWithEmail(loginModel: ILoginModel): Promise<any> {
        return new Promise((resolve, reject) => {
            var filter: filterObject<User> = {
                where: {
                    account:
                    {
                        username: "", password: loginModel.password, roles: []
                    },
                    profile: { email: loginModel.email } as Profile
                }
            };
            this._userDal.Get(filter).then(user => {
                if (user) {
                    resolve(user);
                } else {
                    reject("Kullanıcı adı yada şifre hatalı.");
                }
            }).catch(err => {
                reject(err);
            });
        })
    }
}