// console.log(this);

// アロー関数でのthisは自分が定義された関数の周りのスコープに対してthisになる．=二つ前
// 他の関数でのthisとのやくわりとは違う

const person = {
    firstName: 'Taro',
    lastName: 'Yamada',
    fullName: function () {
        return `${this.lastName} ${this.firstName}`;
    },
    // しかし，以下のようにアロー関数を用いて書いてしまうと返ってくるのは'undefined undefined'となってしまう．というのも上の理由．personが存在するスコープにfirstNameとかlastNameとかは存在しなからだ．
    // fullName: () => {
    //     return `${this.lastName} ${this.firstName}`;
    // },
    delayName: function () {

        setTimeout(() => {
            console.log(this);
            // personが呼ばれる．
            console.log(this.fullName());
        }, 2000);
        // アロー関数を使わないで以下のように書くとエラーがでる．this.fullNameなんて存在しないというエラーを吐かれる．というのもdeleyNameの中を参照してるからである．
        // setTimeout(function () {
        //     console.log(this.fullName());
        // }, 2000);
    }
}