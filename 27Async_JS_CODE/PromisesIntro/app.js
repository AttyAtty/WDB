// コールバック版
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('コネクションタイムアウト')
        } else {
            success(`ダミーデータ(${url})`)
        }
    }, delay)
}
// Promise版
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1', function (response) {
//     console.log('成功！！');
//     console.log(response);
//     fakeRequestCallback('books.com/page2', function (response) {
//         console.log('成功2！！');
//         console.log(response);
//         fakeRequestCallback('books.com/page3', function (response) {
//             console.log('成功3！！');
//             console.log(response);
//         }, function (err) {
//             console.log('エラー3！！！', err);
//         })
//     }, function (err) {
//         console.log('エラー2！！！', err);
//     })
// }, function (err) {
//     console.log('エラー！！！', err);
// })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('成功1！！！');
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('成功2！！！');
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('成功3！！！');
//                     })
//                     .catch(() => {
//                         console.log('失敗3！！！！');
//                     });
//             })
//             .catch(() => {
//                 console.log('失敗2！！！！');
//             });
//     })
//     .catch(() => {
//         console.log('失敗1！！！！');
//     });

// 上の書き方はわざと．下のように書くのが普通．

// thenは成功したら実行される関数を書いて，catchには失敗したときの関数を書く．この書くことを登録と呼んでいる．
// Promisemの強み.1.コールバック地獄を失くせる．下のように.thenとか.catchを使って書くことでネストみたいにならずに済む．thenの次にthenを呼ぶことができる
// 2.エラーハンドリングが楽．.thenでエラーが起きれば.catchにそのまま飛ぶので処理にも時間がかからない．
// 3.async.awaitを使ったコードでもっとシンプル書ける．try/catch文でエラー処理が簡単に書ける．
// 4.何より並列処理ができる．複数の非同期処理を並行して実行できるし，全ての処理が終わるのを待つことができる．


fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('成功1！！！');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    // returnで返したpromiseは次のthenに渡される．次のpromiseの内容は次のthenの中身に書いて実装できる
    // すなわち，非同期処理を順番に書いていける
    .then((data) => {
        console.log('成功2！！！');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('成功3！！！');
        console.log(data);
    })

    // 全てのpromiseにたいするcatchを一元管理できるので，コールバック地獄の時より断然見た目がきれい
    .catch((err) => {
        console.log('失敗！！！！');
        console.log(err);
    });

    // 引数のdataやerrにはpromise関数の定義のresolveやrejectが入る．

    // JavaScriptは同時に複数のプログラムを実行できない．promiseとかブラウザの力を借りて非同期的(並列処理)な処理を実現している．