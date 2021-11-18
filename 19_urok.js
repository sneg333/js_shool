"use_strict";
// задержка в коде

function first() {
    setTimeout(function() {
        console.log(1);
    }, 1000);
}

function second() {
    console.log(2);
}

first();
second();

// колбэк - функция которая должна быть завершена после того как другая функция завершила своё выполнение
function learnJS(lang, callback) {
    console.log(`я учу ${lang}`);
    callback();
}

learnJS('java script', function() {
    console.log('я прошёл этот урок');
});
//////////////////
function learnJS(lang, callback) {
    console.log(`я учу ${lang}`);
    callback();
}

function done() {
    console.log('я прошел этот урок');
}

learnJS('java script', done);