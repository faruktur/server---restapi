import { Entity, PrimaryColumn, Column, BaseEntity, ObjectIdColumn } from "typeorm";
import { IUser } from './interface/IUser';
import { IEntity } from "../core/core/IEntity";
import { Profile } from "./Profile";
import { Account } from "./Account";
import { Role } from "./Role";


@Entity()
export class User extends BaseEntity implements IUser, IEntity {
    
    @ObjectIdColumn()
    id?: string;
    
    @Column(type=>Profile)
    profile?:Profile;

    @Column(type=>Account)
    account?:Account;

    
}