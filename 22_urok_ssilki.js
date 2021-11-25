// ssilki
"use_strict";

// объекты не изменяютя
const obj = {
    a: 5,
    b: 1
};

const copy = obj;
copy.b=2;

console.log(obj);
console.log(copy);

// объекты изменяются
const obj = {
    a: 5,
    b: 1
};

// способ с циклом
function copy(maimObj) {
    let objCopy = {};

    let key;
    for (key in maimObj) {
        objCopy[key] = maimObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(numbers);
console.log(newNumbers);

//
const add = {
    d: 17,
    f: 20,
};

// в assign первым аргументов идёт тот объект в который мы хотим помесить, тут это numbers. 
// вторым аргументои идёт объект который мы помещаем. а данном случаи add
console.log(Object.assign(numbers, add));

// клонирование объекта
const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

// делаем копию массива
const oldarray = ['a', 'b', 'c'];
const newArray = oldarray.slice();

newArray[1] = 'zamena';
console.log(newArray);
console.log(oldarray);

// оператор разворота
const video =['youtube', 'vimeo', 'rutube,'],
    blogs = ['wordpress', 'JJ', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'fb'];

    console.log(internet);

    // второй пример приёма и вывода данных
function log(a, v, d) {
    console.log(a);
    console.log(v);
    console.log(d);
}
// спрет оператор
const num = [2, 5, 7];
log(...num);

// четвёртый способ создания копии объекта
const array = ["a", "b"];
const newArry = [...array];

const q = {
    one: 1,
    tw: 2
};

const newObj = {...q};
