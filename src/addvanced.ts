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

//関数のオーバーロードを実装した時点でオーバーロードされる側の関数は無視される。
function toUpperCase(x:string):string;
function toUpperCase(x:number):number;
//type guard:条件文を使って型を絞り込む(3つほどある)
function toUpperCase(x:string | number){
    //typeofの戻り値は7個くらいしかない
    if(typeof x === 'string'){
        return x.toUpperCase();
    }

    return x;
}

//関数のオーバーロード->関数の戻り値をTSに正しく伝える。l30に記述
const upperHello = toUpperCase('hello');

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

//HTMLElementは抽象的だから手動で型を変える必要がある。->型アサーションか後に asをつける(Reactを使わない人向け)
// const input = <HTMLInputElement>document.getElementById('input');
// const input2 = document.getElementById('input') as HTMLInputElement
(<HTMLInputElement>document.getElementById('input')).value = 'initial input';

//None-null assertion operater->nullではないことを確定させる。->!を使う
const input = document.getElementById('input')!;

//インデックスシグネチャ->オブジェクトのメンバを追加できる機能
interface Designer{
    name:string
    //インデックスシグネチャの文法
    //->メンバ内の型は全てインデックスシグネチャの型に統一する。
    //->index内の型は自由
    [index:string]:string
}

const designer:Designer = {
    name:'Quil',
    role:'web',
}

console.log(designer.role);


interface DownLoadedData {
    id:number;
    user?:{
        name?:{
            firstName:string;
            lastName:string;
        }
    }
}

const downLoadedData: DownLoadedData = {
    id:1
}

//Optional Chaining->undefinedであった場合にエラーを防ぐ処理
console.log(downLoadedData.user?.name?.firstName);

//Nullish Coalescing->undefined/nullかそれ以外かで処理を分岐させる。(空文字 0はtrue扱い->or演算子とは違う)
const userData = downLoadedData.user ?? 'no-user';