import { Container } from "inversify";
import { UserDal } from "../../data-access-layer/concrete/typeorm/UserDal";
import { IUserService } from "../../business/interface/IUserService";
import { UserManager } from "../../business/concrete/UserManager";
import { IUserDal } from "../../data-access-layer/interface/IUserDal";
import types from "../../core/core/Types";
import { UserController } from "../controllers/UserController";
import { User } from "../../entities/User";
import { IRoleDal } from "../../data-access-layer/interface/IRoleDal";
import { RoleDal } from "../../data-access-layer/concrete/typeorm/RoleDal";
import { IRoleService } from "../../business/interface/IRoleService";
import { RoleManager } from "../../business/concrete/RoleManager";
import { IAuthService } from "../../business/interface/IAuthService";
import { AuthManager } from "../../business/concrete/AuthManager";
import { AuthController } from "../controllers/AuthController";
import { ICategoryDal } from "../../data-access-layer/interface/ICategoryDal";
import { CategoryDal } from "../../data-access-layer/concrete/typeorm/CategoryDal";
import { ICategoryService } from "../../business/interface/ICategoryService";
import { CategoryManager } from "../../business/concrete/CategoryManager";
import { CategoryController } from "../controllers/CategoryController";
import { RoleController } from "../controllers/RoleController";

var container = new Container();

// --- User ---
container.bind<IUserDal>(types.IUserDal).to(UserDal);
container.bind<IUserService>(types.IUserService).to(UserManager);
container.bind<UserController>(UserController).toSelf();
// ____ AUTH ____
container.bind<IAuthService>(types.IAuthService).to(AuthManager);
container.bind<AuthController>(AuthController).toSelf();
//__ Category ___
container.bind<ICategoryDal>(types.ICategoryDal).to(CategoryDal);
container.bind<ICategoryService>(types.ICategoryService).to(CategoryManager);
container.bind<CategoryController>(CategoryController).toSelf();

// --- Roles ---
container.bind<IRoleDal>(types.IRoleDal).to(RoleDal);
container.bind<IRoleService>(types.IRoleService).to(RoleManager);
container.bind<RoleController>(RoleController).toSelf();

export default container;