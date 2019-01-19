import { IServiceBase } from "./IServiceBase";
import { Category } from "../../entities/Category";
import { ICategory } from "../../entities/interface/ICategory";

export interface ICategoryService extends IServiceBase<Category>{
    GetParentCategories(): any;


    getChildren(categoryId:string):Promise<Category[]>;
    addChild(parentId:string,category:ICategory):Promise<any>;
    removeChild(id:string,parentId:string):Promise<any>;
    changeParent(id:string,parentId:string):Promise<any>;
}