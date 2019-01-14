import { Column } from "typeorm";
import { IProfile } from "./interface/IProfile";




export class Profile implements IProfile {
    @Column()
    email: string;
    @Column()
    emailVerified?:boolean;
    @Column()
    firstname?: string;
    @Column()
    lastname?: string;
    @Column()
    description?: string;
}