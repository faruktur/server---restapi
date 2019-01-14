import { ErrorObject } from "./ErrorObject";

export class BusinessLayerResult<TEntity>{
    errors: ErrorObject[];
    object: TEntity;

    addError(code,message){
        this.errors.push({code:code,message:message});
    }
}