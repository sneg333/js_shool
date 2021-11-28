"use_strict";

const personalMovieDB = {
    count: 0,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('сколько фильмов вы смотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt(' сколько фильмов уже посмотрели ?', '');
        }
    },
    rememberMyFilm: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько его оцените?', '');
                  if (a != null && b != null && a !='' && b !='' && a.length < 50) {
                      personalMovieDB.movie[a] = b;
                      console.log('done');
                  } else {
                      console.log('error');
                      i--;
                  }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log(' вы киноман!!!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisionMyDV: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat =false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre === null) {
                console.log('вы ввели некорректные данные или не ввели вообще');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`любимый жанр ${i+1} - это ${item}`);
        });
    }
};

