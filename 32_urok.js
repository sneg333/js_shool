"use_strict";


// console.log(document.head);
// console.log(document.documentElement);
//childNodes - свойство
// console.log(document.body.childNodes);
//отталкиваемся от родителя body в данном случаи
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// // получаем родителя, соседей, детей
// console.log(document.querySelector('#current').parentNode);
// // или 
// console.log(document.querySelector('#current').parentNode.parentNode);

// //получаем атрибут из html если следующий то nextSibling, если предыдущий то 
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// //получаем атрибут из html если предыдущий то 
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// // если хотим получить следующий елемент
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('#current').nextElementSibling);

// console.log(document.body.firstElementChild);

// перебираем все элементы и убераем текстовые ноды
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}








