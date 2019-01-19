import * as express from 'express';
import { UserRoutes } from './user-routes';
import { CategoryRoutes } from './category-routes';
import { AuthRoutes } from './auth-routes';
import { RoleRoutes } from './role-routes';
import { ArticleTitleRoutes } from './article-title-routes';




 export class RoutesIndex{
    public app:express.Application=express();
 

    constructor(){}
    get routes(){
        this.app.use(new UserRoutes().routes);
        this.app.use(new CategoryRoutes().routes);
        this.app.use(new AuthRoutes().routes);
        this.app.use(new RoleRoutes().routes);
        this.app.use(new ArticleTitleRoutes().routes);

        return this.app;
    }

}

