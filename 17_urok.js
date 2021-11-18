// методы, свойства
"use strict";
// методы
// length -  свойство определяющее количество символов внутри строки
const str = 'test';
const err = [1, 2, 3];
console.log(str.length);
console.log(err.length);

// после метода идут круглые скобки так как мы совершаем какое то действие над данными
let str = 'test';
console.log(str);
console.log(str.toUpperCase());

let assa = 'привет мир';
//метод выризания строки
console.log(assa.slice(7, 11));
// не поддерживает отрицательные значения
console.log(assa.substring(7, 11));
// второй аргумент говорит сколько символов надо вырезать
console.log(assa.substr(7, 2));

const mun = 12.2;
console.log(Math.round(mun));
// переводит в другую систему исчесления например строку в целое число
let test = '12.2px';
console.log(parseInt(test));
// возвращает дробное значение
console.log(parseFloat(test));