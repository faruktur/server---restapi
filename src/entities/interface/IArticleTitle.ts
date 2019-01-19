import { IResource } from "./IResource";
import { IArticle } from "./IArticle";

export interface IArticleTitle{

    id:string;
    title:string;
    description:string;
    resources:IResource[];
    article:IArticle;

    parent:IArticleTitle;
    children:IArticleTitle[];
}