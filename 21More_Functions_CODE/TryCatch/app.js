// try {
//     hello.toUpperCase();
// } catch {
//     console.log('エラーが起きました！！！');
// }

// console.log('実行！！！');

function shout(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch(e) {
        console.log(e);
        // e じゃなくてもなんでもいいけど，なんか文字を書くことで，どうしてエラーが起きたのかというログが出力される．
        console.log('shoutには文字列を入れてください！！');
    }
}

// Uncaughtはエラーのコード
// 通常エラーが発生するとプログラムは終了してしまうが，try catch文で書くことでエラーがあっても処理を続けることができる．