import { Entity, BaseEntity, Column, PrimaryColumn, ObjectIdColumn } from "typeorm";
import { IRole } from "./interface/IRole";
import { IEntity } from "../core/core/IEntity";
import { Permission } from "./Permission";

@Entity()
export class Role extends BaseEntity implements IRole,IEntity{
   
    @ObjectIdColumn()
    id: string;
    @Column("text")
    role: string; 
    // @Column(type=>Permission)   
    // permission:Permission[];
}