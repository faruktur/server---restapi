import { IEntityRepository } from "../../core/dataAccess/IEntityRepository";
import { Role } from "../../entities/Role";

export interface IRoleDal extends IEntityRepository<Role>{
    asyncGet(filter:any):Promise<Role>;
}