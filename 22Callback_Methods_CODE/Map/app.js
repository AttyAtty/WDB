// mapメソッド 与えられた関数を配列の全ての要素に対して呼び出し，その結果からなる新しい配列を生成する．
// forEachと違うところは，returnをするところ．引数の関数をコールバック関数と呼ぶ．mapの引数として返ってくるから．

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const doubles = numbers.map(function(num) {
//     return num * 2;
// });



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

const titles = movies.map(function(movie) {
    return movie.title;
});