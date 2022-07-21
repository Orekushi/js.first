"use strict";

// const numberOfFilms = +prompt('Скількі фільмів ви вже подивилися?', "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true
// };

// const a = prompt('Один із останніх переглянутих фільмів?', ""),
//       b = +prompt('На скільки оціните його?', ""),
//       c = prompt('Один із останніх переглянутих фільмів?', ""),
//       d = +prompt('На скільки оціните його?', "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// for (let i = 0; i <2; i++) {
//     const a = prompt('Один із останніх переглянутих фільмів?', ""),
//           b = +prompt('На скільки оціните його?', "");

//     if (a != null && b != null && a != '' && b != '' && a.length <=50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// let num = 0;

// while(num < 2) {
//     const a = prompt('Один із останніх переглянутих фільмів?', ""),
//           b = +prompt('На скільки оціните його?', "");
//           num++;

// if (a != null && b != null && a != '' && b != '' && a.length <=50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         num--;
//     }
// }

// do {
//     const a = prompt('Один із останніх переглянутих фільмів?', ""),
//           b = +prompt('На скільки оціните його?', "");
//           num++;

// if (a != null && b != null && a != '' && b != '' && a.length <=50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         num--;
//     }
// } 
// while (num <2);



// if (personalMovieDB.count < 10) {
//     console.log("Переглянуто досить мало фільмів");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log("Ви класичний глядач");
// } else if (personalMovieDB.count > 30) {
//     console.log("Ви кіноман");
// } else {
//     console.log("Помилка");
// }

// console.log(personalMovieDB);




let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скількі фільмів ви вже подивилися?', "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скількі фільмів ви вже подивилися?', "");
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




function rememberMyFilms() {
    for (let i = 0; i <2; i++) {
        const a = prompt('Один із останніх переглянутих фільмів?', ""),
              b = +prompt('На скільки оціните його?', "");
    
        if (a != null && b != null && a != '' && b != '' && a.length <=50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто досить мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Ви класичний глядач");
    } else if (personalMovieDB.count > 30) {
        console.log("Ви кіноман");
    } else {
        console.log("Помилка");
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш улюблений жанр під номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();
