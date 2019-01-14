import { ICategoryService } from "../interface/ICategoryService";
import { injectable, inject } from "inversify";
import { ICategoryDal } from "../../data-access-layer/interface/ICategoryDal";
import types from "../../core/core/Types";
import { Category } from "../../entities/Category";
import { ICategory } from "../../entities/interface/ICategory";

@injectable()
export class CategoryManager implements ICategoryService{
    

    private _categoryDal:ICategoryDal;
    public constructor(@inject(types.ICategoryDal) private categoryDal:ICategoryDal){
        this._categoryDal=categoryDal;
    }



    
    getChildren(categoryId:string): Promise<Category[]> {
        return new Promise((resolve,reject)=>{
            this.Get({where:{id:categoryId},relations:["children"]}).then(category=>{
                var children = category.children;
                resolve(children);
            }).catch(err=>{
                reject(err);
            });
        });
    }
    addChild(parentId: string, category: ICategory): Promise<any> {
        throw new Error("Method not implemented.");
    }
    removeChild(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    changeParent(id: string, parentId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    


    Get(filter?: any): Promise<import("d:/angular/Angular Project/WikiProject_Server/src/entities/Category").Category> {
        throw new Error("Method not implemented.");
    }    
    GetList(filter?: any): Promise<import("d:/angular/Angular Project/WikiProject_Server/src/entities/Category").Category[]> {
        throw new Error("Method not implemented.");
    }
    Add(object: import("d:/angular/Angular Project/WikiProject_Server/src/entities/Category").Category): Promise<import("d:/angular/Angular Project/WikiProject_Server/src/entities/Category").Category> {
        throw new Error("Method not implemented.");
    }
    Update(id: string, object: import("d:/angular/Angular Project/WikiProject_Server/src/entities/Category").Category): Promise<import("d:/angular/Angular Project/WikiProject_Server/src/entities/Category").Category> {
        throw new Error("Method not implemented.");
    }
    Delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}