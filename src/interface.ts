interface Human {
    //readonly:参照のみ
    readonly name:String;
    age:number;
    //greeting:(message:string) => void;
    //オブジェクト内でのみ使える
    greeting(message:string):void;
} 

class Developer implements Human{
    //readOnlyかpublicのみ
    constructor(public name:string,public age:number,public experience:number){}
    greeting(message:string){
        console.log('Hello');
    }
}

const tmpDeveloper = {
    name: 'Quil',
    age:38,
    experience:3,
    greeting(message:string){
        console.log('Hello');
    }
}

const user:Human = tmpDeveloper;
let developer = new Developer('Quil',36,3);
developer.name = 'aa';