// "use strict";

// const men = {
//     name: "hot",
//     age: 26,
// };

// console.log(men.name);

const moovieKveshtion = +prompt('сколько фильмов просмотрено ?', '');

const moovieDB = {
    count: moovieKveshtion,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const 
    a = prompt('Один из последних просмотренных фильмов', ''),
    b = prompt('на сколько его оцените', ''),
    c = prompt('Один из последних просмотренных фильмов', ''),
    d = prompt('на сколько его оцените', '');

    moovieDB.movies[a] = b;
    moovieDB.movies[c] = d;

    console.log(moovieDB);
