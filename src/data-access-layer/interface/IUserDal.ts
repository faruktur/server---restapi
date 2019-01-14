import { IEntityRepository } from "../../core/dataAccess/IEntityRepository";
import { User } from "../../entities/User";
import { injectable } from "inversify";






export interface IUserDal extends IEntityRepository<User>{
     
}