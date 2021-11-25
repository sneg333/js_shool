'use_strict';

// изменеие стилей в объекте, например замена цвета блока и тд 

const box = document.getElementById('box'),
            btn = document.getElementsByTagName('button'),  
            circle = document.getElementsByTagName('button'), 
            hearts = document.querySelectorAll('.heart'), 
            oneHead = document.querySelector('.heart'); 

box.style.backgroundColor = 'blue';
box.style.width = '500px';

// изменеия можно делат ьконкретным объектам а не всем сразу
//то есть одной кнопке меню, но все меню свойство style не меняются
btn[1].style.borderRadius = '100%';
// так сработает
circle[1].style.backgroundColor = 'red';

// если нужно сменить стили нескольких объектов сразу, например всех кнопок меню
box.style.cssText = `background-color: blue; width: 500px`;

circle.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// создание элементов внутри js скрипта
// пример создания элемента div
const div = document.createElement('div');

// создание нода или текста на странице
// этот текст появится на странице
const text = document.createTextNode('тут был я');

// создание css класса
div.classList.add('black');

//добавляет блок или любой другой тэг в самый конец родительского блока
// в данном случаи родительский блок body
document.body.append('div');
// добавляет блок в начало родительсткого блока
document.body.prepend('div');

// позволяет вставить элемент в любое место
// надо указать какой элемент стоит перед или после того места куда хотим вставить блок
hearts[0].before(div);
hearts[0].after(div);

// можем удалять элемент со страницы
circle[0].remove;

// можно заменить один элемент другим
// сначала указываем какой элемент хотим заменить
hearts[0].replaceWith(circle[0]);



