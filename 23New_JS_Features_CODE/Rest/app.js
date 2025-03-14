// arguementオブジェクトはアロー関数以外の全ての関数に対して使える．
// 関数に対して渡されたすべての引数を含んでいる．配列のようなオブジェクト．

// function sum() {
//     return arguments.reduce((total, num) => total + num);
// }

// 引数の個数が未知でも対応できる．...numsは引数全体．データの入力とかに有効
// パラメータの名前を自分の好きなものにできるところもいい．レスト構文
function sum(...nums) {
    return nums.reduce((total, num) => total + num);
}

function raceResults(gold, silver, ...rest) {
    console.log(`金：${gold}`);
    console.log(`銀：${silver}`);
    console.log(`その他：${rest}`);
}