// メソッドと呼んでいたのは，オブジェクトに格納された関数のこと．p部ジェクトのプロパティとして定義された関数のこと
// 呼び出すときは基本的にmyMath.squareみたいな書き方．
// 下の省略されていない書き方はメソッドの省略した定義の仕方
const myMath = {
    PI: 3.14,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
    // square: function (num) {
    //     return num * num;
    // },
    // cube: function (num) {
    //     return num ** 3;
    // }
}

// thisの値は，thisを使っている関数がどのように呼ばれたかに依存する．よく使う

// 今まで書いてきたプログラムは全てwindowというオブジェクトの中身に入っていた．
// window.console.log('あひゃあひゃ')　と　console.log('あひゃひゃ')　は同じもの．

const cat = {
    name: 'タマ',
    color: 'grey',
    breed: 'アメリカンショートヘア',
    cry() {
        console.log(this);
        console.log(`${this.name}がにゃーと泣きました`);
    }
}

const cry2 = cat.cry;