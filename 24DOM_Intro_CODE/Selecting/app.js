// const allImages = document.getElementsByTagName('img');
// getElementsById：ページの要素に対応するjavascriptのオブジェクトをidから探してくれという意味のメソッド


// 配列とは違うがループを回すことができる
// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

const links = document.querySelectorAll('p a');
// querySelectorAllはそれを満たす全ての要素をとってくる点はquerySelectorとは同じだが，その対象となる要素すべてを返すという点で異なる．

for (let link of links) {
    console.log(link.href);
}

// getElement's'となっている奴は，一つの要素だけではなく，それを満たす全ての要素をとってくる．返すのは最初のやつ
// getElementsByTagNameタグ名を検索する時によく使う？
// getElementsByClassNameはクラス名が同じやつに対して行っている．
// 満たすクラス名がないときはHTMLCollectionを返す．getElementByIdではnullを返していた．

// DOMには取得ー＞操作という流れがある

// その点querySelectorはめっちゃ便利でgetElementsBy系の上位互換って感じ．
// タグでもidでもclassでも属性でもどの要素に対しても返すことができる．img:nth-of-type(3)とかa[title="ヒツジ"]とかなんでも

// どれでも注意すべきなのはdocument.をつけルのを忘れないこと