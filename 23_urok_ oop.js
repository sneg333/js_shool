// прототипно ориентированное программирование
"use_strict";

const soldat = {
    energi: 400,
    rost: 180,
    sayHello: function() {
        console.log('hello');
    }
};

const jon = {
    energi: 100
};
// const jon = Object.create(soldat);
// jon.sayHello();
Object.setPrototypeOf(jon, soldat);

jon.sayHello();
console.log(jon);
///////////////////////
const soldat = {
    energi: 400,
    rost: 180,
    sayHello: function() {
        console.log('hello');
    }
};

const jon = Object.create(soldat);
jon.sayHello();


