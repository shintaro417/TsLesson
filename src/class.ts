class Person{
    constructor(public name:string,protected age:number){
    }

    incrementAge(){
        this.age += 1;
    }

    //スコープ外でも値を保持し続けることができる。
    greeting(this:Person){
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old`);
    }
}

let person2 = Person;
const quil = new Person('Quil',38);
quil.incrementAge();
quil.greeting();


class Teacher extends Person{
    constructor(name:string,age:number,public subject:string){
        super(name,age);
    }

    greeting(){
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}

const teacher = new Teacher('Quil',38,'Math');
teacher.greeting();
