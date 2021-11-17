// циклы
"use strict";

// 1 способ
let num = 50;

//пока условие выполняется, будем делать действие
while (num <= 55) {
    console.log(num);
    num++;
}

// 2 вариант
//сначала идёт действие цикла, после того как он отработал идёт проверка
let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

// 3 вариант for
// 
let num = 50;
for (let i = 1; i < 8; i++){
    console.log(num);
    num++;
}

// break прерывает цикл
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}
// continue перепрыгивает через значение и идёт дальше
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}






