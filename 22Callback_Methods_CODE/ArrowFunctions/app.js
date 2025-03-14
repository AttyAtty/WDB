// アロー関数：通常の関数式の簡潔な代替構文

// const add = function (x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// 暗黙のreturnは関数内の式が一つの場合しか使えない．

// const add = (x, y) => (
//     x + y
// );

// 上の三つの関数式は同じこと．引数がないときは()を必ず書く．引数が一つの時は()を省略することもできるけど，統一したほうがいい．
// 三つめはアロー関数の暗黙的なreturnの書き方．{}から()に代わる．

// 一行しかない場合は()も省略することができる．
const add = (x, y) => x + y;

const square = num => {
    return num * num;
}

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
];

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`;
// })

const newMovies = movies.map(movie => 
    `${movie.title} - ${movie.score / 10}`
)