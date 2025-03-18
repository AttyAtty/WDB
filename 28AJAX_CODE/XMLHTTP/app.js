// 以降の書き方はする必要がない．一番古い書きかた，
// なぜ不便かというと，Promiseをサポートしていないからだ．
// 次の講義のfetchを使うので，まあ，知っておくだけでいい．

const req = new XMLHttpRequest();

// 下の二つの式がイベントハンドラー

// onloadの等式の右辺に書いてあるのは，リクエストが成功したときに実行される関数．
req.onload = function() {
    console.log('成功！！！');
    // console.log(this.responseText); //これだと返ってくるのはただの文字列．
    const data = JSON.parse(this.responseText);  //これによってjsonファイル(オブジェクト)に変換している
    console.log(data.name, data.height); //jsonに変換したオブジェクトを出力している
}

// 上とは逆にリクエストに失敗したときは下のonerrorに登録されている関数が呼ばれる．
req.onerror = function() {
    console.log('エラー！！！');
    console.log(this);
}

req.open('GET', 'https://swapi.dev/api/people/1/');
// 第一引数はAPIのメソッド．
req.send();

// https://swapi.dev/api/people/1/