function Logging(message:string){
    return function (target:Function){
        console.log('Logging..');
        console.log(message);
    }
}

// function Logging(target:Function){
//     console.log('Logging..');
// }

function Component(template:string,selector:string){
    return function<T extends {new(...args:any[]): {name :string}} >(constructor:T){ //constructorをインスタンス化できるようにする。

        return class extends constructor{
            constructor(...args:any[]){
                super(...args);
                console.log('Component');
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if(mountedElement){
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1')!.textContent = instance.name;
                }
            }
        };
    }
}

function PropertyLogging(target:any,propertyKey:string){
    console.log('propertyLoggin');
    console.log(target);
    console.log(propertyKey);
}
function MethodLogging(target:any,propertyKey:string,descreptor:PropertyDescriptor){
    console.log('propertyLoggin');
    console.log(target);
    console.log(propertyKey);
}
function AccessorLogging(target:any,propertyKey:string,descreptor:PropertyDescriptor){
    console.log('AccessorLoggin');
    console.log(target);
    console.log(propertyKey);
}

function ParamatorLogging(target:any,propertyKey:string,paramatorIndex:number){
    console.log('ParamatorLoggin');
    console.log(target);
    console.log(propertyKey);
}

function Enumrable(isEnumrable:boolean){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        return {
            enumrable:isEnumrable
        }
    }
}


@Component('<h1>{{ name }}</h1>','#app') //Userのnameに対応するようにする。index.htmlのid = appに代入する
@Logging('Loggin User')
class User{
    @PropertyLogging
    name = 'aaa';
    constructor(private _age:number){
        console.log('User was created'!);
    }
    @AccessorLogging
    get(){
        return this._age;
    }
    set(value:number){
        this._age = value;
    }
    //@Enumrable(false)
    @MethodLogging
    greeting(@ParamatorLogging message:string){
        console.log('Hello');
    }
}