import { IArticle } from "./IArticle";

export interface ICategory{
    categoryName:string;
    

    articles:IArticle[];
    parent:ICategory;
    children:ICategory[];
}