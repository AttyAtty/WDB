// AXIOSはfetchなどとはまたベつのライブラリ．もっと簡単にHTTPリクエストできる
// fetchではbodyが呼ばれていないせいでもう一度jsonを呼んでpromiseを返してもらっていたが，
// axiosではbodyも返ってくるので，二度リクエストを投げる必要がない．

// axios
//   .get("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE!", res);
//   })
//   .catch((e) => {
//     console.log("ERROR!!!", e);
    //   });
    
// promiseを扱うので以下の方がきれい．

    const getStarWarsPerson = async (id) => {
        try {
        const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
        console.log(res.data.result.properties);
        } catch (e) {
        console.log("ERROR", e);
        }
    };
    
    // このようにurlの一部を引数で代入することよってたくさんのjsonを返せるようにできる．
    getStarWarsPerson(5);
    getStarWarsPerson(10);

// 講義ではgetDadJokeのAPIを使ったアプリを１つ作っている．それをj分で作ってみたい所．
// メモはしてない．自分で動画見直して．

// 無料の公開APIは雑な不適当な使い方(ループでリクエストしすぎたり)をすると，BANされたりするので，使用すると気は注意．