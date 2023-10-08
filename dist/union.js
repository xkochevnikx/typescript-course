"use strict";
const s = 'loading';
//сужение типов
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
function welocome(person) {
    if (Array.isArray(person)) {
        console.log(person.join(' '));
    }
    else {
        console.log(person);
    }
}
const arr = [];
