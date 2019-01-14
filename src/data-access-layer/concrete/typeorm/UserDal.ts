import { TypeOrmRepositoryBase } from "../../../core/dataAccess/typeorm/Typeorm-RepositoryBase";
import { User } from "../../../entities/User";
import { MongoRepository, MongoEntityManager, Connection, ObjectType } from "typeorm";
import { injectable } from "inversify";
import { IUserDal } from "../../interface/IUserDal";
import { DatabaseConnection } from "../../../core/core/DatabaseConnection";
import { IUser } from "../../../entities/interface/IUser";



@injectable()
export class UserDal 
// extends TypeOrmRepositoryBase<User>
implements IUserDal
{
    connection:Connection;
    protected _context:MongoRepository<User>;
    type:ObjectType<User>;
    entity:User&Function;
    constructor(){
        DatabaseConnection.getConnection().then(con=>{
            console.log('Mongo connection created...');
            this._context  = con.getMongoRepository<User>("User");
        });
    }
    Get(filter: any): Promise<User> {
       return this._context.findOne(filter);
    }    
    List(filter: any):  Promise<User[]> {
        return this._context.find(filter);
    }
    Add(object: IUser): any {
      return this._context.save(object);
    }
    Update(filter:any, object: User): Promise<any> {
        return this._context.updateOne(filter,object);
    }
    Delete(id: string): Promise<any> {
        var filter = {where:{id:id}}
        return this._context.deleteOne(filter);
    }
}