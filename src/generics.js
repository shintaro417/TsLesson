"use strict";
function copy(value, key) {
    return value;
}
console.log(copy({ name: 'Quil', age: 38 }, 'age'));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('apple');
stringLightDatabase.add('banana');
stringLightDatabase.add('grape');
stringLightDatabase.remove('grape');
console.log(stringLightDatabase.get());
let tmp;
let tmp2;
let tmp3;
