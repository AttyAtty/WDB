// reduce: 配列の各要素に対して（引数で与えられた）reducer関数を実行して，「単一の出力値」を生成する．
// 引数は二個必要．一つ目はデータが蓄積される変数,最終的な値．(最初は配列の0番目は入っている．)．
// 二つ目には配列の１番目以降，次に処理される要素が入る．(勝手に)．
// どっちも名前だけ宣言してくれればいい．

const prices = [980, 1500, 1980, 4980, 2980];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total); // 12420

// prices.reduce((total, price) =>{
//     return total + price;
// })

// return した値が次のtotalに入る．totalに代入したならそれが次のtotal
prices.reduce((total, price) => total * price)

// 配列の最小値を求める関数．引数のpriceは勝手に更新される．returnは引数のminに返される．
const minPrice = prices.reduce((min, price) => {
    if (min > price) {
        return price;
    }
    return min;
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const highestMovie = movies.reduce((bestMovie, currMovie) => {
    if (bestMovie.score < currMovie.score) {
        return currMovie;
    }
    return bestMovie;
})


const evens = [2, 4, 6, 8];

const sum = evens.reduce((sum, num) => sum + num, 50);
// このようにreduce関数を使った場合，50は初期値．