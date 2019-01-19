import { Entity, ObjectIdColumn, Column, ManyToOne, OneToMany, Tree, BaseEntity, TreeChildren, TreeParent } from "typeorm";
import { EntityBase } from "./EntityBase";
import { ICategory } from "./interface/ICategory";
import { Article } from "./Article";



@Entity()
@Tree("adjacency-list")
export class Category extends BaseEntity implements ICategory{
    @ObjectIdColumn()
    id: string;

    @Column("text")
    categoryName:string;




    @ManyToOne(type=>Category,category=>category.children,{cascade:['insert','update']})
    parent:Category;
    
    @OneToMany(type=>Category,category=>category.parent,{cascade:['insert','update']})
    children:Category[];

    @OneToMany(type=>Article,type=>type.titles)
    articles:Article[];
}