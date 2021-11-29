"use_strict";


// удаление заголовков
const red = document.querySelectorAll('.section_title');
// первый вариант
red.forEach(item => {
    item.remove();
})

// события
const btn = document.querySelector('a');
btn.onclick = function() {
    alert('Click');
};

// событиe 2

btn.addEventListener('mouseenter', (e, ) => {
    console.log('hello');
});