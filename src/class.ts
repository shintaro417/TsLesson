class Person{
    static speices = 'Homo sapiens';
    static isAdult(age:number){
        if(age > 17)return true;
        return false;
    }
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
// quil.incrementAge();
// quil.greeting();


class Teacher extends Person{
    /**getterとsetterは同じ関数名を命名することができる */
    get subject(){
        if(!this._subject){
            throw new Error('There is no subject');
        }
        return 'Music';
    }

    //value:getの返り値を推定して型を変換してくれる。
    set subject(value){
        if(!value){
            throw new Error('There is no value');
        }
        this._subject = value;
    }
    constructor(name:string,age:number,private _subject:string){
        super(name,age);
    }

    greeting(){
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}

const teacher = new Teacher('Quil',38,'Math');
teacher.greeting();

console.log(Person.isAdult(24));
