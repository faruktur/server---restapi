let types = {

    //USER
    IUserService:Symbol('IUserService'),
    IUserDal:Symbol('IUserDal'),
    UserController:Symbol('UserController'),

    //Auth
    IAuthService:Symbol("IAuthService"),
    AuthController:Symbol("AuthController"),

    //ROLE
    IRoleService:Symbol('IRoleService'),
    IRoleDal:Symbol('IRoleDal'),
    RoleController:Symbol('RoleController'),



    //Category
    ICategoryService:Symbol("ICategoryService"),
    ICategoryDal:Symbol("ICategoryDal"),
    CategoryController:Symbol("CategoryController")
};

export default types;