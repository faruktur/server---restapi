import { Entity, ObjectIdColumn, Column, ManyToOne, OneToMany, Tree } from "typeorm";
import { EntityBase } from "./EntityBase";



@Entity()
export class Category extends EntityBase{
    @ObjectIdColumn()
    id: string;

    @Column("text")
    categoryName:string;

    @ManyToOne(type=>Category,category=>category.children)
    parent:Category;
    
    @OneToMany(type=>Category,category=>category.parent)
    children:Category[];

}