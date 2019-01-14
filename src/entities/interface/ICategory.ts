export interface ICategory{
    categoryName:string;
    

    parent:ICategory;
    children:ICategory[];
}