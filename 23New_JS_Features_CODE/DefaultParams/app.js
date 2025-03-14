function rollDie(numSides = 6) {
    // numSides = typeof numSides !== 'undefined' ? numSides : 6;
    // イコールで等式を書くだけでそれがデフォルトの引数の設定となる．めっちゃベんり．引数を書かなかった時の処理．
    // 過去には上にあるような三項演算子とかif文で描いたりしてたけど大分はしょれるようになった．
    return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = 'こんにちは', suffix='!!') {
    console.log(`${msg}、${person}さん${suffix}`);
}
// デフォルトの引数は引数の末尾に持ってくることが多い．引数の順番も大事
// 上のようにデフォルト引数が複数あって，真ん中の引数のみを何も書かないで渡したい場合，その引数の場所にundefinedを書くことで実現できる．