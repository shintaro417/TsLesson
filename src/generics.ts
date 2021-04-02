function copy<T extends {name :string},U extends keyof T>(value:T,key:U):T{
    return value;
}

console.log(copy({name:'Quil',age:38},'age'));