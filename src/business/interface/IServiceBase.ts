export interface IServiceBase<T>{
    Get(filter?:any):Promise<T>;
    GetList(filter?:any):Promise<T[]>;
    Add(object:T):Promise<T>;
    Update(id:string,object:T):Promise<T>;
    Delete(id:string):Promise<any>;

}