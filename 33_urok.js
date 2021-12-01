"use_strict";


document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "logan",
            "liga spravedlivosti",
            "la-la lend"
        ]
    };
    
    const addForm = document.querySelector('form.add'),
    movieList = document.querySelector('.promo_interactiv_list'),
    addInput = addForm.querySelector('.adding_input'),
    checkbox = addForm.querySelectorAll('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorit = checkbox.checked;

        if (newFilm) {
            //если название фильма большее 11 символов, то оно обрезается и ставится
            if (newFilm.length > 11) {
                newFilm = `${newFilm.substring(0, 12)}...`;
            }
            // отмечаем чекбоксом любимый фильм
            if (favorit) {
                console.log("любимый фильм");
            }


            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }


        event.target.reset();
    });

        const sortArr = (arr) => {
            arr.sort();
        }


    function createMovieList(film, parent) {
        parent.innerHTML = "";
    
        film.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo_inter_item">${i + 1} ${film}
                    <div class="delete"></div>
                    </li>
            `;
        });
    }


    sortArr(movieDB.movies);
});





//1 получаем элементы из html с которыми будем работать
const fff = document.querySelector('.kakojto_class')




