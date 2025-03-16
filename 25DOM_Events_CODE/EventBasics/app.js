const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('クリックした！');
    console.log('ほげほげ');
}

function scream() {
    console.log('ああああああああ！！');
    console.log('いやーーーーー');
}

btn.onmouseenter = scream;
//括弧をつけないことに注意

document.querySelector('h1').onclick = () => {
    alert('h1をクリック');
}
// イベントメソッドの式の右辺は関数名．中身ではない．実行するのはメソッド内にある．

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert('クリック！！！');
});
// addEventListener(行うイベント名(Stringで渡す), 実行する関数);
//上記のいくつかはイベントを一つしか与えられなかったが，名前の通りaddEventListenerはイベントを複数加えることができる．また，オプションもつけれる．引数の一番後ろに{once:true}を書けばイベントが一度しか実行されなくなる
// これが一番つかわれる
function hoge() {
    console.log('hoge');
}

function moge() {
    console.log('moge');
}

const hogemogeButton = document.querySelector('#hogemoge');
// hogemogeButton.onclick = hoge;
// hogemogeButton.onclick = moge;

hogemogeButton.addEventListener('click', hoge);
hogemogeButton.addEventListener('click', moge);