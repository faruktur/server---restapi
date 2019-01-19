import { BaseEntity, ObjectIdColumn, Column } from "typeorm";
import { IResource } from "./interface/IResource";

export class Resource implements IResource{
    
    @ObjectIdColumn()
    id:string;
    
    
    @Column()
    title: string;    
    @Column()
    description: string;
    @Column()
    resourceName: string;
    @Column()
    link: string;


}