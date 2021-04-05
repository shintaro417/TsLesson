"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: 'Quil'
};
class Developer {
    //readOnlyかpublicのみ
    constructor(age, experience, initNmae) {
        this.age = age;
        this.experience = experience;
        this.initNmae = initNmae;
        if (initNmae) {
            this.name = initNmae;
        }
    }
    greeting(message = 'hello') {
        console.log('Hello');
    }
}
const tmpDeveloper = {
    name: 'Quil',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log('Hello');
    }
};
const user = tmpDeveloper;
let developer = new Developer(38, 3);
if (user.name) {
    user.name.toUpperCase();
}
