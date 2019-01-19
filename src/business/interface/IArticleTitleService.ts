import { IServiceBase } from "./IServiceBase";
import { ArticleTitle } from "../../entities/ArticleTitle";
import { IResource } from "../../entities/interface/IResource";
import { IArticleTitle } from "../../entities/interface/IArticleTitle";

export interface IArticleTitleService extends IServiceBase<ArticleTitle>{
    
    addResource(id:string,resource:IResource):Promise<ArticleTitle>;
    removeResource(id:string,resourceId:string):Promise<ArticleTitle>;
    addChild(id:string,child:IArticleTitle):Promise<ArticleTitle>;
    removeChild(id:string,childId:string):Promise<ArticleTitle>;
    changeParent(id:string,newParentId:string):Promise<ArticleTitle>;
    getChildren(id:string):Promise<ArticleTitle[]>;
    getArticleTitlesByArticleId(id:string):Promise<ArticleTitle[]>
}