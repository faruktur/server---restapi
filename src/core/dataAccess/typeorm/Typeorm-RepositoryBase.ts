import { IEntity } from "../../core/IEntity";
import {MongoRepository, Connection,BaseEntity} from 'typeorm';
import {injectable } from "inversify";
import { DatabaseConnection } from "../../core/DatabaseConnection"; 
import 'reflect-metadata';
import { User } from "../../../entities/User";
import { Role } from "../../../entities/Role";
import { PlainObjectToNewEntityTransformer } from "typeorm/query-builder/transformer/PlainObjectToNewEntityTransformer";
import { type } from "os";

export type ObjectType<T> = { new (): T } | Function;
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

@injectable()
export class TypeOrmRepositoryBase<TEntity extends BaseEntity>{
    connection:Connection;
    protected _context:MongoRepository<TEntity>;
    type:ObjectType<TEntity>;
    entity:TEntity&Function;
    constructor(){
        DatabaseConnection.getConnection().then(con=>{
            this._context=con.getMongoRepository<TEntity>(this.type);
        })
    }
    Get(filter: any): Promise<TEntity> {
       return this._context.findOne(filter);
    }    
    List(filter: any):  Promise<TEntity[]> {
        return this._context.find({take:10});
    }
    Add(object: TEntity): Promise<any> {
      return this._context.insert(object);
    }
    Update(id: string, object: TEntity): Promise<any> {
        return this._context.updateOne({id:id},object);
    }
    Delete(id: string): Promise<any> {
        return this._context.deleteOne({id:id});
    }
     
    

}