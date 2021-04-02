function copy<T extends {name :string},U extends keyof T>(value:T,key:U):T{
    return value;
}

console.log(copy({name:'Quil',age:38},'age'));

class LightDatabase<T extends string | number | boolean>{
    private data:T[] = [];
    add(item:T){
        this.data.push(item);
    }
    remove(item:T){
        this.data.splice(this.data.indexOf(item),1)
    }
    get(){
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('apple');
stringLightDatabase.add('banana');
stringLightDatabase.add('grape');
stringLightDatabase.remove('grape');
console.log(stringLightDatabase.get());

interface Todo{
    title:string;
    text:string;
}

type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

interface ResponceData<T extends {message:string} = any>{
    data:T;
    status:number;
}

let tmp:ResponceData;
interface Vegitables{
    tomato:string;
    pumpkin:string;
}

type MappedTypes = {
    [P in keyof Vegitables]:P
}

type ConditionalTypes = 'tomato' extends string ? number:boolean;
type ConditionalInfer = {tomato:'tomato'} extends {tomato:infer R} ? R : boolean;
type DistributiveConditionalTypes<T> = T extends 'tomato' ? number : boolean;
let tmp2:DistributiveConditionalTypes<'tomato' | 'pumpkin'>;

let tmp3:NonNullable<string | null>
