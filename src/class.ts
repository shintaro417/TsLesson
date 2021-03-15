class Person{
    //フィールド
    public name:string;
    private age:number;
    constructor(initName:string,initAge:number){
        this.name = initName;
        this.age = initAge;
    }

    private incrementAge(){
        this.age += 1;
    }

    //スコープ外でも値を保持し続けることができる。
    greeting(this:Person){
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old`);
    }
}

let person2 = Person;
const quil = new Person('Quile',32);

const anotherQuil = {
    name:'anotherQuil',
    anotherGreeting:quil.greeting
}
anotherQuil.anotherGreeting;