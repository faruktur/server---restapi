import { Role } from "./Role";
import { Column } from "typeorm";



export class Account {  
   
    constructor(){}
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    roles?: Role[];
}