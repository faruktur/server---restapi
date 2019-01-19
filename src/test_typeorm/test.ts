import { DatabaseConnection } from "../core/core/DatabaseConnection";
import { MongoRepository, EntityManager, getManager, getMongoRepository, MongoEntityManager } from "typeorm";
import { Category } from "../entities/Category";
import { ICategory } from "../entities/interface/ICategory";
import { id } from "inversify";


var connection = DatabaseConnection.getConnection()


export class Test{
    db:MongoRepository<Category>;
    _db:MongoEntityManager;
    constructor(){
        connection.then(connect=>{
            this.db=connect.getMongoRepository(Category);
            this._db = getMongoRepository(Category).manager;
            console.log('DB Connected');
            this.createCategory();
           
        }).catch(err=>{
            console.log('error',err);
        })
    }
    async createCategory(){
        this.db.findOne({where:{categoryName:"Category1"}}).then(parent=>{
            console.log('parent category ', parent);
            var category:Category =new Category();
            var category2:Category =new Category();
            category2.categoryName = "karıasjhs asdasdasd";
            category.categoryName="new category 1.1.2 asddddddddddddddddddddddddddddddddd";
            category.children=[category2];
            parent.children=[category];
            // category.parent=parent;
            
            if(!parent.children) parent.children=[];
        
           
            // this.db.update({id:parent.id},parent).then(r=>{
            //     console.log('update result', r);
            //     this.getChildren('1.2');
            // }).catch(err=>{
            //     console.log('update error ',err);
            // });
            // category.parent=parent;
            parent.save().then(r=>{
                    console.log('update result', r);
                    this.getChildren('Category1');
                }).catch(err=>{
                    console.log('update error ',err);
                });
             
        }).catch(err=>{
            console.log('findOne ERROR',err);
        });
    }

    async getChildren(categoryName:string){
        var list =  await this.db.find({relations:['children','parent']});
        console.log('list',list);
        var category = await this.db.findOne({where:{categoryName:categoryName},relations:['children','parent']});
        console.log('children Parent',category)
    }
    async getParent(categoryId:string){
        var category = await this.db.findOne({where:{id:categoryId},relations:["children"]});
  }
}