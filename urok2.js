// условия
"use strict";

// в круглых скобках пишем условия которые хотим проверить
// в фигурных скобках указано то что должно случиться если условие верно
if (4 == 9) {
    console.log('ok');
}
else {
    console.log('ne verno');
}

const num = 50;
    if (num < 49) {
        console.log('error 1');
    }
    else if (num > 100) {
        console.log('много');
    }
    else {
            console.log('верно');
        }
    
// тернарный оператор
(num === 50) ? console.log('ok!!!') : console.log('eRoR');

//switch работает на строгое сравнение параметров
const asa = 40;
switch (asa) {
    case 39:
        console.log('ne verno');
        break;
    case 100:
        console.log('snova net');
        break;
    case 40:
        console.log('verno');
        break;
    default:
        console.log('не в этот раз');
        break;
}


