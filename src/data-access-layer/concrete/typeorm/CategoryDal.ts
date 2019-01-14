import { injectable } from "inversify";
import { ICategoryDal } from "../../interface/ICategoryDal";
import { Category } from "../../../entities/Category";
import { Connection, MongoRepository } from "typeorm";
import { DatabaseConnection } from "../../../core/core/DatabaseConnection";
import { ICategory } from "../../../entities/interface/ICategory";

@injectable()
export class CategoryDal implements ICategoryDal{

    connection:Connection;
    protected _context:MongoRepository<Category>;
    entity:Category&Function;
    constructor(){
        DatabaseConnection.getConnection().then(con=>{
            this._context  = con.getMongoRepository<Category>("Category");
        });
    }
    
    Get(filter: any): Promise<Category> {
        return this._context.findOne(filter);
     }    
     List(filter: any):  Promise<Category[]> {
         return this._context.find(filter);
     }
     Add(object: ICategory): any {
       return this._context.save(object);
     }
     Update(filter:any, object: Category): Promise<any> {
         return this._context.updateOne(filter,object);
     }
     Delete(id: string): Promise<any> {
         var filter = {where:{id:id}}
         return this._context.deleteOne(filter);
     }


}