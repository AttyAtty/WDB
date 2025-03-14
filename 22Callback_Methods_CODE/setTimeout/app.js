// console.log('やっほー')
// setTimeout(() => {
//     console.log('おーい');
// }, 3000);

// () => {console.log('おーい');} が関数部分．3000はミリセカンド．３秒後にこの関数が実行されることを示している
// setTimeout関数実行中にそこでプログラムがストップしてるわけではなくそのまま下の行のプログラムも実行に移る．平行して行われる．
// setTimeout関数は指定した関数を指定した時間後に実行するという関数．

// console.log('ばいばい');

const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

// setInterval関数は，指定した関数を指定した時間のインターバルで実行させ続ける関数．

// clearInterval(id);
// 上記の文が実行されることによってインターバルが終わる．