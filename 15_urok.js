
"use strict";

const moovieKveshtion = +prompt('сколько фильмов просмотрено ?', '');

const moovieDB = {
    count: moovieKveshtion,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i <2; i ++) 
{
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('на сколько его оцените', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) 
    {
        moovieDB.movies[a] = b;
        console.log('yes');
    }
    else 
    {
         console.log('error');
         i--;
    }
    
}

if (moovieDB.count < 10)
{
    console.log('это мало');
}
else if (moovieDB.count >= 10 && moovieDB.count < 30)
{
    console.log('ну более менее');
}
else if (moovieDB.count >= 30)
{
    console.log('довольно не плохой результат');
}
else
{
    console.log('ошибка');
}

console.log(moovieDB);
