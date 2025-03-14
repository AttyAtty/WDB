const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function print(element) {
//     console.log(element);
// }

// print(numbers[0]);
// print(numbers[1]);

// forEachメソッドの引数の()に関数の定義を丸々ぶち込んでる．
// 配列にたいしてループを回して，各要素に対して中の関数を実行している．引数の名前は何でもいい

// numbers.forEach(function (element) {
//     console.log(element);
// });

// これと全く同じ．
// for (let elem of numbers) {
//     console.log(elem);
// }


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

// Amadeus - 99/100

movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
})
// for of文の方が使いやすい．配列に限らず列挙可能なすべてのオブジェクト（Stringとか）に対して使えるから．
