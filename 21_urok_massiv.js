// массивы и псевдомассивы
"use_strict";

const arr = [1, 2, 3, 4, 6 ,7];
// pop удаляет последний элемент из массива
arr.pop();
console.log(arr);

const arr = [1, 2, 3, 4, 6 ,7];
//push добавляет элемент в конец массива
arr.push(10);
console.log(arr);

const arr = [1, 2, 3, 4, 6 ,7];
//length перебирает все элементы массива, не зная сколько их
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const arr = [1, 2, 3, 4, 6 ,7];
for (let value of arr) {
    console.log(value);
}

//item это то что мы перебираем, название произвольное
// i это номер по порядку
// третий аргумент это ссылка на тот массив который мы перебираем
const arr = [1, 2, 3, 4, 6 ,7]; 
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


