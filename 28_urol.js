// breckpoint
"use_strict"; 

// допустим в html <div id"box"">
const box = document.getElementById('box')
console.log(box);

///////////////////
//в html <button>1</button> <button>2</button> <button>3</button> <button>4</button>
//а нам нужна одна кнопка например вторая
const btn = document.getElementsByTagName('button');
console.log(btn[1]);

// псевдомассив css селектор
const heard = document.querySelectorAll('.heart');

// при помощи forEach выводим все псевдоэлементы в консоль 
heard.forEach(item => {
    console.log(item);
})

// принимает только первый css силектор (псевдокласс)
const oneheard = document.querySelector('.heart');
console.log(oneheard);







