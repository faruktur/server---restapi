import { IArticleTitle } from "./interface/IArticleTitle";
import { BaseEntity, Entity, ObjectIdColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { IArticle } from "./interface/IArticle";
import { Resource } from "./Resource";
import { Article } from "./Article";

@Entity()
export class ArticleTitle extends BaseEntity implements IArticleTitle {
    @ObjectIdColumn()
    id:string;
    
    @Column()
    title: string;
    @Column()
    description: string;

    @Column(type=>Resource)
    resources: Resource[];



    @ManyToOne(type=>Article,t=>t.titles)
    article:Article;

    @ManyToOne(type=>ArticleTitle,articleTitle=>articleTitle.children)
    parent:ArticleTitle;
    
    @OneToMany(type=>ArticleTitle,articleTitle=>articleTitle.parent,{cascade:true})
    children:ArticleTitle[];


}