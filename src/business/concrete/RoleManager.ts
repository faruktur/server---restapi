import { IRoleService } from "../interface/IRoleService";
import { inject, injectable } from "inversify";
import types from "../../core/core/Types";
import { IRoleDal } from "../../data-access-layer/interface/IRoleDal";
import { IRole } from "../../entities/interface/IRole";
import { Role } from "../../entities/Role";

@injectable()
export class RoleManager implements IRoleService{

    private _IRoleDal:IRoleDal;
    public constructor(@inject(types.IRoleDal) private IRoleDal:IRoleDal){
        this._IRoleDal=IRoleDal
    }
    Get(filter?: any): Promise<IRole> {
        return this.IRoleDal.Get(filter);
    }
    GetList(filter?: any): Promise<IRole[]> {
        return this.IRoleDal.List(filter);
    }
    Add(object: IRole): Promise<IRole> {
        var role:Role = object as Role;
        return this.IRoleDal.Add(role);
    }
    Update(id: string, object: IRole): Promise<IRole> {
        return this._IRoleDal.Update(id,object as Role);
    }
    Delete(id: string): Promise<any> {
        return this._IRoleDal.Delete(id);
    }
}