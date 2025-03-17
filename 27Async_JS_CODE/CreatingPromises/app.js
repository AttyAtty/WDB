// promiseは自分で作るというよりかは，他人の作ったものを使うことが多い．ライブラリの中のメソッドを使ったりね．

new Promise( // 新しいPromiseはこのようにnewを用いて定義する．
    (resolve, reject) => { //引数としてよく渡される．他の文字でもいい．
        // 非同期処理
        setTimeout(() => {
            // 成功の場合resolve()
            resolve('ダミーデータです');
        }, 1000);
    }
)

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('ダミーデータです');
                return; //関数を終了させるため
            }
            reject('コネクションタイムアウト');
        }, 1000)
    });
}

// fakeRequest('/hoge')
//     .then((data) => {
//         console.log('成功！！！！');
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('エラー！！！', err);
//     });




// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

//Promiseで書くことで上の関数でのdoNextが必要なくなってる．
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))