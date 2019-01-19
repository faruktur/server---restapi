import { injectable } from "inversify";
import { ICategoryDal } from "../../interface/ICategoryDal";
import { Category } from "../../../entities/Category";
import { Connection, MongoRepository } from "typeorm";
import { DatabaseConnection } from "../../../core/core/DatabaseConnection";
import { ICategory } from "../../../entities/interface/ICategory";
import { IArticleTitleDal } from "../../interface/IArticleTitleDal";
import { ArticleTitle } from "../../../entities/ArticleTitle";
import { filterObject } from "../../../core/dataAccess/IEntityRepository";

@injectable()
export class ArticleTitleDal implements IArticleTitleDal{
    
    connection:Connection;
    protected _context:MongoRepository<ArticleTitle>;
    entity:Category&Function;
    constructor(){
        DatabaseConnection.getConnection().then(con=>{
            this._context  = con.getMongoRepository<ArticleTitle>(ArticleTitle);
        });
    }
    Get(filter: filterObject<ArticleTitle>): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }    
    List(filter:filterObject<ArticleTitle>): Promise<ArticleTitle[]> {
        throw new Error("Method not implemented.");
    }
    Add(object: ArticleTitle): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }
    Update(id: string, object: ArticleTitle): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }
    Delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }


    
    
    


}