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

@Component('<h1>{{ name }}</h1>','#app') //Userのnameに対応するようにする。index.htmlのid = appに代入する
@Logging('Loggin User')
class User{
    name = 'aaa';
    constructor(){
        console.log('User was created'!);
    }
}