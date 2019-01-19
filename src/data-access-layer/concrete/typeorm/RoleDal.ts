import { TypeOrmRepositoryBase } from "../../../core/dataAccess/typeorm/Typeorm-RepositoryBase";
import { User } from "../../../entities/User";
import { MongoRepository, MongoEntityManager, Connection, ObjectType } from "typeorm";
import { injectable } from "inversify";
import { IUserDal } from "../../interface/IUserDal";
import { DatabaseConnection } from "../../../core/core/DatabaseConnection";
import { Role } from "../../../entities/Role";
import { IRoleDal } from "../../interface/IRoleDal";
import { filterObject } from "../../../core/dataAccess/IEntityRepository";



@injectable()
export class RoleDal 
// extends TypeOrmRepositoryBase<User>
implements IRoleDal
{
    async asyncGet(filter: any): Promise<Role> {
        return this._context.findOne(filter);
    }
    connection:Connection;
    protected _context:MongoRepository<Role>;
    type:ObjectType<Role>;
    entity:Role&Function;
    constructor(){
        DatabaseConnection.getConnection().then(con=>{
            this._context  = con.getMongoRepository<Role>(Role);
        });
    }
    Get(filter:any): Promise<Role> {
       return this._context.findOne(filter);
    }    
    List(filter: filterObject<Role>):  Promise<Role[]> {
        return this._context.find(filter);
    }
    Add(object: Role): Promise<any> {
      return this._context.insert(object);
    }
    Update(id: string, object: Role): Promise<any> {
        return this._context.updateOne({id:id},object);
    }
    Delete(id: string): Promise<any> {
        return this._context.deleteOne({id:id});
    }
}