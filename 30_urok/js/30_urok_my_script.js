"use_strict";

const movieDB = {
    movie: [
        "Логан",
        "Лига справедливости",
        "Ла ла ленд",
        "Одержимость"
    ]
};


const adv = document.querySelectorAll('.beautypress-btn-wraper');
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

