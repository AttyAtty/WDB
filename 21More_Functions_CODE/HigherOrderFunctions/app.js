// 高階関数：関数を受け取ったり，関数を返す関数．引数として関数を受け取る．戻り値に関数をしていする．

// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for(let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie)

// 関数から関数を呼んでいる
function makeRandomFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log('おめでとう！！！！');
        }
    } else {
        return function() {
            alert('ウィルスに感染しました！！！');
            alert('閉じないで');
            alert('閉じないで');
            alert('閉じないで');
            alert('閉じないで');
        }
    }
}

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

// makeBetweenFunc(50, 100)

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }