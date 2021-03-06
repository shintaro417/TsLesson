"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    //スコープ外でも値を保持し続けることができる。
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old`);
        this.explainJob();
    }
}
Person.speices = 'Homo sapiens';
let person2 = Person;
// const quil = new Person('Quil',38);
// quil.incrementAge();
// quil.greeting();
class Teacher extends Person {
    //シングルトンパターン
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am teacher. I teach ${this.subject}.`);
    }
    /**getterとsetterは同じ関数名を命名することができる */
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject');
        }
        return this._subject;
    }
    //value:getの返り値を推定して型を変換してくれる。
    set subject(value) {
        if (!value) {
            throw new Error('There is no value');
        }
        this._subject = value;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quil', 38, 'Math');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
teacher.greeting();
