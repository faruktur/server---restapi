import { ICategory } from "./ICategory";
import { IArticleTitle } from "./IArticleTitle";


export interface IArticle{
    id:string;
    title:string;
    description:string;
    body:string;

    category:ICategory;
    titles:IArticleTitle[];
}