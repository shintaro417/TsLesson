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