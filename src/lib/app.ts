import * as express from 'express';
import * as bodyParser from 'body-parser';
import "reflect-metadata";
import { Container } from 'inversify';
import * as _container from './ioc/Containers';
import { RoutesIndex } from './middlewares/routes/routes-index';
import * as cors from 'cors';
import { Test } from '../test_typeorm/test';

class App{
    public app : express.Application;
    container:Container;
    tester:Test = new Test();
    
    constructor(){ 
        this.app = express();
        this.config();
        this.container= _container.default;
    }
    private config() : void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(cors());
        this.app.use('/api',new RoutesIndex().routes);
    }
}
export default new App().app