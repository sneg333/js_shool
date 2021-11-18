"use_strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyMoovie() {
    for (let i = 0; i <2; i ++) {

        const a = prompt('Один из последних просмотренных фильмов', ''),
              b = prompt('на сколько его оцените', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) 
        {
            personalMovieDB.movies[a] = b;
            console.log('yes');
        }
        else 
        {
            console.log('error');
            i--;
        } 
    }
}

rememberMyMoovie();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10)
{
    console.log('это мало');
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)
{
    console.log('ну более менее');
}
else if (personalMovieDB.count >= 30)
{
    console.log('довольно не плохой результат');
}
else
{
    console.log('ошибка');
}
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);

function writeYourGeneres() {
    for (let i = 1; i <=3; i++) {
        const genre = prompt(`ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGeneres();