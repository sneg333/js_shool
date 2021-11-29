"use_strict";

// удаление заголовков
// const red = document.querySelectorAll('.section_title');
// // первый вариант
// red.forEach(item => {
//     item.remove();
// })

// если хотим навесить одни и теже события на один тип кнопок, например button
const btn = document.querySelectorAll('button');

const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
}

btn.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});


// если хотим одно событие на один элемент
const root = document.querySelectorAll('p');
root.onclick = function() {
    alert('Click');
};


// событиe 2
//target - показывает элемент
// btn.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.remove();
// });

// const deleteElement = (e) => {
//     console.log(e.target);
// }
// btn.addEventListener('click', deleteElement);


// отмена стандартного поведения браузера прописывается в самом начале
const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
});


