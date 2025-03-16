const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// changeイベント：formからフォーカスが外れる(入力できる状態じゃなくなる．ブラウザの他の部分をクリックする．)&&入力内容が異なる 場合に実行される．
// input.addEventListener('change', function(e) {
//     console.log('change!!!');
// });

// inputイベント：入力が行われるたびに実行される．
input.addEventListener('input', function() {
    h1.innerText = input.value;
});