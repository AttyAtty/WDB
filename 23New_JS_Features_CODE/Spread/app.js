// スプレッド構文：配列式や文字れるなどの反復可能オブジェクトを，０個以上の引数(関数呼び出し)や要素(配列リテラル)を期待された場所で展開したり，
// オブジェクト式を，０個以上のキーの値のペア(オブジェクトリテラル)を気体された場所で展開したりできる．

// ループをかけなくても，配列などの要素に順に参照でるようになる．


const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
Math.max(nums) //NaN
Math.max(...nums) //53456

// console.log("nums"); 
// これだと配列が出力される
// [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456]
// console.log("...nums");
// これだと配列の要素が順に出力される
// 13 4 5 21 3 3 1 2 7 6 4 2 53456

const cats = ['Tama', 'Tora', 'Momo'];
const dogs = ['Hachi', 'Pochi'];

// いままでは配列に対してconcatメソッドを使っていたが，以下のようにスプレッド構文で書くと簡単．
const allPets = [...cats, ...dogs];
// 一番の利点は，以下のように，配列を結合と同時に，新しい要素も追加できるところにある．追加する位置も引数に渡す順番で変えられる．
// const allPets = [...cats, ...dogs, 'Sakura'];

// ['あいうえお']に対して[...'あいうえお']と書くと，["あ","い","う","え","お"]と返される．


const feline = {legs: 4, family: 'ネコ科'};
const canine = {family: 'イヌ科', bark: true};

// const catDog = {...feline, ...canine};
// と定義したときに同じ名前のキーがあった時，後の引数で定義されているキーと値のペアが優先される．
// familyのキーで'ネコ科'だったのが'イヌ科'になる．そのうえでbarkというキーも増える．


const formData = {
    email: 'hoge@example.com',
    password: 'secret',
    username: 'hoge'
}

// formData.id = 123;
// formData.isVerified = false;
// 上のようにプログラムを書くと勝手にidとかisVerifiedなどのオブジェクトが元データに追加されてしまう．
// だから，newuser = {...formData}のようにコピーして使うこと多々．

// const user = formData;

const user = {...formData, id: 123, isVerified: false};

// コンソール上での操作．オブジェクトに対してスプレッドを行ったとき．キーは勝手に０からの番号になる．配列のインデックスみたいに．
// オブジェクトに対するスプレッド構文はVueとかReactのライブラリでめっちゃ使われる．コピーの時とかに．

// let array = [1,3,5,7,9]
// undefined
// array
// (5) [1, 3, 5, 7, 9]
// {array}
// {array: Array(5)}
// [...array]
// (5) [1, 3, 5, 7, 9]
// 'array'
// 'array'
// a = 'array'
// 'array'
// [a]
// ['array']
// [...a]
// (5) ['a', 'r', 'r', 'a', 'y']
// {...a}
// {0: 'a', 1: 'r', 2: 'r', 3: 'a', 4: 'y'}
// {...array}
// {0: 1, 1: 3, 2: 5, 3: 7, 4: 9}