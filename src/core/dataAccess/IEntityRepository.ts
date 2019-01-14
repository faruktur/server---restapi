import { IEntity } from "../core/IEntity";
import { JoinOptions } from "typeorm";

export interface filterObject<T>{
    select?:(keyof T)[],
    where?:Partial<T>,
    relations?:(keyof T)[],
    join?:JoinOptions,
    order?:{[P in keyof T]?:"ASC"|"DESC"};
}

export interface IEntityRepository<T extends IEntity> {
     

    Get(filter:filterObject<T>):Promise<T>;
    List(filter:filterObject<T>):Promise<T[]>;
    Add(object:T):Promise<any>;
    Update(id:string,object:T):Promise<any>;
    Delete(id:string):Promise<any>;
}