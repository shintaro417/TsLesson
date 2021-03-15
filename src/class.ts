class Person{
    //フィールド
    name:string;
    constructor(initName:string){
        this.name = initName;
    }

    //スコープ外でも値を保持し続けることができる。
    greeting(this:Person){
        console.log(`Hello My name is ${this.name}`);
    }
}

const quil = new Person('Quill');
console.log(quil);
quil.greeting();

const anotherQuil = {
    name:'anotherQuil',
    anotherGreeting:quil.greeting
}
anotherQuil.anotherGreeting;