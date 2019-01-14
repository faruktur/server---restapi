import { IRole } from "./IRole";
import { Role } from "../Role";

export interface IAccount{
 
    username: string;

    password: string;

    roles?: IRole[];
}