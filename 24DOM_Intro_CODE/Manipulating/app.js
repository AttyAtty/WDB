// DOM = Document Object Model
// htmlの全ての要素はツリー構造のようになっている．
// javascriptではそれらの要素をオブジェクトにツリー構造のようにして入れることで管理している．そのオブジェクトをdomumentと呼んでいる．
// コンソールでconsole.dir(document)とするとdocumentオブジェクトの中身を参照できる．htmlでのタグ名がキーになっている感じ．全然いじらないオブジェクトが多い．

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = '私はリンクです！！！！';
// }

for (let link of allLinks) {
    link.style.color = 'red';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

// querySelector('h1').innerTextだとh1タグのもの全てに適応される．インナー要素があってそれをタグごとに指摘すると，htmlなので，<i>タグも表示されてしまう．
// そこでquerySelector('h1').innerHTMLを使うと，左辺の'<i>asd</i>'に対してタグ要素がしっかり適応される


// getAttribute():属性のないようを参照するためのメソッド
// const firstLiink = document.querySelector('a');
// firstLiink.href だと "file:///wiki/----"となるのが
// firstLiink.getAttribute('href')だと "wiki/----"となる.必ず一致するとは限らない．
// idやclassだとnullを返し，titleとかだと"庭"と返したりする．

// getに対してsetAttribute()もあって，
// firstLink.setAttibute('href', 'https://google.com');みたいな感じで，どのタグに何を代入するのかを書ける

// const h1 = querySelector('h1');みたいな感じとしてあげるとh1の要素の最初を返す．querySelectorAllだと満たすタグなどの要素全てを返す．

//############################################################

// h1.style.○○とするとcssをいじることができる．
// 例えばcssファイルでh1の色をいじったとして，コンソールでh1.style.colorを確認すると""が返ってくる．コンソールではcssでの変更は認識されない．表示されるのはhtmlのタグか，javascriptファイル内での変更だけ．
// スタイルを指定するときは，cssと違って右辺は必ず文字列として与える．必ず''で囲う．例：h2.style.fontSize = '3em';

// 様々なファイルでスタイルをいじるせいで最終的にどれになったのかはわかりづらい．それを簡単に知る方法がある．
// getComputedStyle(〇〇)である．getComputedStyle(h1).colorみたいにすることで最終的なh1の色がわかる．

//############################################################

// 要素に適応されているクラスを取得したり排除する方法．
// const h2 = document.querySelector('h2');
// h2.getAttrbute('class'); // null
// h2.getAttrbute('class', 'purple'); // classにpurpleクラスを代入．
// h2.getAttrbute('class', 'border'); // classにborderクラスを代入．先ほどのpurpleクラスは入っていない．この方法だと一つしかクラスを与えられない．

// const currentClasses  =h2.getAttribute('class'); //class = border
// h2.setAttribute('class', '${currentClasses} purple'); //これで複数のクラスを与えられる．

// もっと楽に書ける方法がある．
// h2.classList.add('purple'); // classにpurpleクラスを追加する
// h2.classList.add('border'); // classにborderクラスを追加する.purpleクラスは保持したまんま
// h2.classList.remove('border'); // classからborderクラスを除外する

// h2.classList.contains('border'); // classが引数に入っているものを含んでいるのかをbooleanで返す

// h2.classList.toggle('border'); // toggleは引数に書いたクラスのtrue falseを切り替える．クリックしたときに表示非表示を切り替える的な．めちゃ使う便利な機能
// クラスをtoggleするは結構キーワード

//###################################################################

// 親クラスが何かを返したい場合は，h2.parentElementというメソッドを使う．
// 子クラスを参照したい場合はh2.childrenというメソッドを使う．子クラスは一つとは限らないからね．childElementは単体
// childrenメソッドで返されるのは配列ではないが，indexを指定して配列のように参照ができる．

// 兄弟クラスを呼びたい場合はnextElementSiblingメソッド，previousElementSiblingメソッドを呼ぶ．
// nextSiblingメソッドを使うと次のノードが返ってくる．htmlに書いてある全要素を順に参照しているので，大抵の場合改行の\nが返ってくる．

// ####################################################################

// 要素を新しくオブジェクトとして作ったり排除したりするメソッド．createElement.
// 作った要素を子要素として追加するメソッド．appendChild().引数は必ず要素名でないといけない．
// append()というメソッドもある．これだと1つ以上の要素を同時に指定した要素の最後尾に追加できるし，要素以外にもテキストも直接引数に入れることができる．
// prepend()メソッドは指定した要素の先頭に追加する

// 空の要素を作るー＞中身を更新するー＞追加するの流れで書く

// const newH3 = document.createElement('h3');
// newH3.innerText = '新要素';
// document.body.appendChild(newH3);

// 自分の好きな場所に兄弟要素を入れるコマンドinsertAdjacentElement(position, element).
// positionは4種類ある．適宜うまく使って．
// after()メソッドは指定した要素の直後に兄弟要素を追加する．before()は直前。

// ####################################################################

// remove()メソッドは要素自身を排除する．removeChild()は親要素をも書かなきゃいけないので少し面倒．
// const img = document.querySelector('img');
// img.remove();
// これだけで指定した要素を消せる