// объекты и их методы
"use_strict";

const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
};

console.log(option.name);
console.log(option['name']);

// оператор delete удаляет что-то из объекта
delete option.name;
console.log(option);

//данная конструкция перебирает все вложения
const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
};

for (let key in option) {
    console.log(`свойства ${key} имеет значение ${option[key]}`);
}

// для того что бы отображалось всё вложенное
const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
};

for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`свойства ${i} имеет значение ${option[key][i]}`);
        }
    } else {
        (`свойства ${key} имеет значение ${option[key]}`);
    }
}

// перебрать свойства если знаем ключи
let counter = 0;
for (let key in option) {
    counter++;
}
console.log(counter);

// метод keys показывает сколько объектов
const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
};
console.log(Object.keys(option).length);

//деструктуризация объекта, доставать объекты из функции, и она становится отдельной переменной
const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    }
};
const {border, bg} = option.colors;
console.log(border);

 