import { Connection,createConnection } from "typeorm";
import { User } from "../../entities/User";
import { Role } from "../../entities/Role";
import { Category } from "../../entities/Category";

export class DatabaseConnection {
    private static connection:Promise<Connection>=null;
    constructor() {}
    public static async getConnection():Promise<Connection> {
        if (this.connection==null) {
            this.connection = this.connect();
        }
        

        return this.connection;
    }
    private static async connect(){
        return await createConnection({
            type: "mongodb",
            host: "localhost",
            port: 27017,
            database: "wikiproject",
            entities: [User, Role,Category],
            useNewUrlParser: true
        });
    }



   
}