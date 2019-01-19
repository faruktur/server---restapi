import { BaseEntity, Entity, ObjectIdColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { IArticle } from "./interface/IArticle";
import { Category } from "./Category";
import { ArticleTitle } from "./ArticleTitle";

@Entity()
export class Article extends BaseEntity implements IArticle{
    
    @ObjectIdColumn()
    id: string;    
    
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    body: string;



    @ManyToOne(type=>Category,t=>t.articles)
    category: Category;

    @OneToMany(type=>ArticleTitle,t=>t.article)
    titles: ArticleTitle[];


}