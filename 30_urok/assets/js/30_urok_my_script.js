"use_strict";

const movieDB = {
    movie: [
        "Логан",
        "Лига справедливости",
        "Ла ла ленд",
        "Одержимость",
        "Арбуз"
    ]
};

const adv = document.querySelectorAll('.slider_layer_image');
// первый вариант
adv.forEach(item => {
    item.remove();
})



// второй вариант
const fff = document.querySelectorAll('.beautypress-btn-wraper');
fff.forEach(function (item) {
    item.remove();
});
// оба способа работают

const feed = document.querySelectorAll('.xsicon icon-cream-3');
    feed = document.querySelectorAll('.xsicon icon-cream-3');

feed.textContent = 'драма';

// бэкграунд страницы, если хотим сделать картинкуp
const poster = document.querySelector('.single__slider bg-opacity');
poster.style.backgroundImage = 'url("assets/img/da.jpg")';

//сортировка данным по алфавиту
const movieList = document.querySelector('.class2');
movieList.innerHTML = "";
// sort сортирует элементы по алфавиту, если это строка
movieDB.movie.sort();
// forEach перебирает элементы
movieDB.movie.forEach((film, i) => {
    movieList.innerHTML += `
    <li>${i+1} ${film}
        <a href="" class="beautypress-facebook">
            <i class="fa fa-facebook">
                НАЗВАНИЕ ФИЛЬМА
            </i>
        </a>
    </li>
    `;
});
// a = a + 1; одно и тоже a += 1;

