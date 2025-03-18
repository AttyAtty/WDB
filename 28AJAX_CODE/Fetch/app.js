// fetch(url)だけでリクエストを送ることができる．XMLに比べると圧倒的に楽になっている．
fetch("https://swapi.tech/api/people/1/")
    //fetchを実行するとpromiseが返ってくるので，下の行のように.thenとか.catchを使える． 
    //引数に入る物をレスポンスオブジェクトと呼んでいる
    .then((res) => {
        console.log("RESOLVE!!!", res);
        // このコンソールが実行されるのはレスポンスが返ってHTTPヘッダ―が呼ばれて早々．
        // だから，promiseのbodyの中身(jsonのデータが入るところ)は読み込めておらず何も入っていない．
        return res.json();
        // bodyを読み込むためにさらにjsonを呼んであげて，そのpromiseのresolveを待ってあげる必要がある．
    })
    .then((data) => {
        console.log(data.result.properties);
        // ここでやっとレスポンスのbodyが使える
    })
    .catch((e) => {
        console.log("エラー！！！", e);
    });
    
// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVE!!!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//     return fetch("https://swapi.tech/api/people/2/");
//   })
//   .then((res) => {
//     console.log("2個目のリクエストがRESOLVE!!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//   })
//   .catch((e) => {
//     console.log("エラー！！！", e);
//   });


// 上のようにpromiseで書けるということは，async awaitでより簡潔に書けるということ

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.tech/api/people/1/");
        const data = await res.json();
        console.log(data.result.properties);
        const res2 = await fetch("https://swapi.tech/api/people/2/");
        const data2 = await res2.json();
        console.log(data2.result.properties);
    } catch (e) {
        console.log("エラー！！！", e);
    }
};

loadStarWarsPeople();