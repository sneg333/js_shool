// динамическая типизация
"use_strict";
//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));
//2)
// при сложении со строкой получается строка!
console.log(typeof(5 + ''));

const num = 5;
console.log("http://vk.com/catalog/" + '');

// превращение в число
//1)
console.log(typeof(Number('4')));
//2) 
console.log(typeof(+'5'));
//3)
console.log(typeof(parseInt('15', 10)));
//4)

let num = +prompt("hello", "");

// всегда лож это если пустота или ноль
// 0, '', null, undefined, NaN;
swit = null;
if (swit) {
    console.log('work it');
}
// работает
swit = 10;
if (swit) {
    console.log('work it');
}
