// let total = 0;
// function collect() {
//     total = 6;
// }
// console.log(total);
// collect();
// console.log(total);

// let bird = 'アオサギ';

// function birdWatch() {
//     // let bird = 'ムクドリ';
//     console.log(bird);
// }

// birdWatch();
// console.log(bird);

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14;
//     let msg = 'hogehoge';
//     console.log(PI);
// }

// console.log(PI);
// console.log(msg);

// for (let i = 0; i < 5; i++) {
//     let msg = 'lskdfjasldfkj';
// }

// console.log(msg);
// console.log(i);

// *******************************************************
// だが，letやconstをvarにすると，ブロック祖コープが適応されない．ブロックの外でも呼び出せる．
// *******************************************************

// function bankRobbery() {
//     const heroes = ['スパイダーマン', 'スーパーマン', 'ブラックパンサー'];
//     function help() {
//         for (let hero of heroes) {
//             console.log(`助けて、${hero}!!!`);
//         }
//     }

//     help();
// }

// let x = 'あいうえお';
// function hoge() {
//     console.log(x);
// }
// function moge() {
//     let x = 'かきくけこ';
//     hoge();
// }

// function add(x, y) {
//     return x + y;
// }

// ****************************************************
// 関数式．この先よく使う．constで使える．
// メリット：無名関数として扱える．関数に名前がない．
// 変数に代入しているおかげで，引数として関数を代入できたり，他の変数に置き換えたりすることができる．柔軟に扱える．
// アロー関数も使いやすい．
// *******************************************************
const add = function (x, y) {
    return x + y;
}

const PI = 3.14;