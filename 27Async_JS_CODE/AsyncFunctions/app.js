// async関数はPromiseよりも新しい非同期関数．もっとすっきり書ける
// 元々複雑な関数やプログラムをより簡単に書けるようになった関数やメソッドを糖衣構文(シンタックスシュガー)という
// asyncは関数定義の時にfunctionの前に書いてあげることによって，その関数を非同期関数にしてしまうめっちゃ凄いやつ．アロー関数でもOK．
// つまり，asyncが先頭についている関数を実行すると，何も書いていなくても，その関数はPromiseを返す．


async function hello() {

}

const sing = async () => {
    throw new Error('問題が起きました！！！'); // reject
    return 'らららららら'; // resolve
}

// throwによってその後ろに書いたものを新しくエラーとして定義でき，エラーとして扱える．
//sing()はpromiseを返すので，.thenや.catchをそのまま続けて使える．
 // thenの引数dataにはsingで返された ららららら が入る．ー＞return したものはresolveに入る

// sing()
//     .then((data) => {
//         console.log('成功：', data);
//     })
//     .catch((err) => {
//         console.log('エラ−！！')
//         console.log(err);
//     });

const login = async (username, password) => {
    if (!username || !password) {
        throw new Error('ユーザー名またはパスワードがありません'); //reject
    }
    if (password === 'secret') {
        return 'ようこそ！！！';  //resolve
    }

    throw new Error('パスワードが間違ってます');
    // バックエンドに投げている？
}

// login('hoge', 'secret')
//     .then(msg => {
//         console.log('ログイン成功！');
//         console.log(msg);
//     })
//     .catch(err => {
//         console.log('エラー！！！');
//         console.log(err);
//     })


// awaitはasync関数の中でしか使えない．awaitはPromiseがresolveかrejectするまでasync関数の実行を一時的に停止する．


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

// 上ではthenのなかにコールバック関数を書いていたが，下ではそれも要らず，一行一行ただ実行したい関数を書いていくだけで，見やすくなった．

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
}

// rainbow()
//     .then(() => {
//         console.log('rainbow完了！');
//     });

async function printRainbow() {
    await rainbow();
    console.log('rainbow完了!!!');
}

// printRainbow();


const fakeRequest = (url) => {
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

async function makeRequest() {
    try {
        const data1 = await fakeRequest('/hoge1');
        // fakeRequestのresolveが返した値がそのままdataに入る．直感的な見た目のコードでわかりやすい．
        console.log(`data1: ${data1}`);
        const data2 = await fakeRequest('/hoge2');
        console.log(`data2: ${data2}`);
    } catch (e) {
        console.log('エラー発生！！！');
        console.log(e);
        // rejectされた場合はcatchで処理できる．eがエラーの内容，rejectの中身
    }
}

makeRequest();