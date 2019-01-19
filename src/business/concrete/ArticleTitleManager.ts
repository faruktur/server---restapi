import { IArticleTitleService } from "../interface/IArticleTitleService";
import { injectable, id, inject } from "inversify";
import { ArticleTitle } from "../../entities/ArticleTitle";
import { IArticleTitle } from "../../entities/interface/IArticleTitle";
import { IResource } from "../../entities/interface/IResource";
import { IArticleTitleDal } from "../../data-access-layer/interface/IArticleTitleDal";
import types from "../../core/core/Types";



@injectable()
export class ArticleTitleManager implements IArticleTitleService{
    


    private _articleTitleDal:IArticleTitleDal;
    private _articleDal:any;
    constructor(@inject(types.IArticleTitleDal) private articleTitleDal:IArticleTitleDal,
    
    ){
        this._articleTitleDal=articleTitleDal;
         
    }
    getArticleTitlesByArticleId(id: string): Promise<ArticleTitle[]> {
        throw new Error("Method not implemented.");
    }
    removeResource(id: string, resourceId: string): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }
    addResource(id: string, resource:  IResource): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }
    addChild(id: string, child:  IArticleTitle): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }
    removeChild(id: string, childId: string): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }
    changeParent(id: string, newParentId: string): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }
    getChildren(id: string): Promise<ArticleTitle[]> {
        throw new Error("Method not implemented.");
    }

    Get(filter?: any): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }    
    GetList(filter?: any): Promise<ArticleTitle[]> {
        throw new Error("Method not implemented.");
    }
    Add(object:ArticleTitle): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }
    Update(id: string, object:ArticleTitle): Promise<ArticleTitle> {
        throw new Error("Method not implemented.");
    }
    Delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }


}