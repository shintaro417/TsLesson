type Engineer = {
    name:string;
    role:string;
}

type Blogger = {
    name:string;
    follower:number;
}

//インターセクション型(interfaceでも動く)
//type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer,Blogger{}

const quil:EngineerBlogger = {
    name:'Quil',
    role:'front-end',
    follower:1000
}

//never
type tmp = string & number;

type NumberBoolean = number | boolean;
type StringNumber = string | number;

//AND演算子が型になる
type Mix = NumberBoolean & StringNumber;

//type guard:条件文を使って型を絞り込む(3つほどある)
function toUpperCase(x:string | number){
    //typeofの戻り値は7個くらいしかない
    if(typeof x === 'string'){
        return x.toUpperCase();
    }

    return '';
}

type NomadoWorker = Engineer | Blogger;
function describeProfile(nomadoWorker:NomadoWorker){
    console.log(nomadoWorker.name);
    //in演算子:特定のオブジェクト型を特定する時に有用
    if('role' in nomadoWorker){
        console.log(nomadoWorker.role);
    }
    if('follower' in nomadoWorker){
        console.log(nomadoWorker.follower);
    }
}

class Dog{
    //タグつけ
    kind:'dog' = 'dog'
    bark(){
        console.log('bow-bow');
    }
}

class Bird{
    kind:'bird' = 'bird'
    bark(){
        console.log('tweet');
    }
    fly(){
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
function havPet(pet:Pet){
    pet.bark();
    switch(pet.kind){
        case 'bird':
            pet.fly;
            break;
        case 'dog':
            pet.bark;
            break;
    }
    //instanceof:変数の型を絞り込む。interfaceは使えない
    if(pet instanceof Bird){
        pet.fly();
    }
}