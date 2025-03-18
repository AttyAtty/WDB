// ここではクエリストリングの使い方を意識してアプリを作っている
// 検索したものに対してもらった画像の情報を自分のページに出すアプリ
// 検索した単語にい関連する番組を表示するアプリ．
// これも自分で一回実装してみるといい．

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // デフォルトでフォーム内のデータが送られたり，ページが変わってしまうのを阻止している
    const searchTermInput = form.elements.query;
    // 上のinputの取り出し方は１通りじゃないので，コンソールで調べてから書くように
    const config = {
        params: {
            q: searchTermInput.value
            // このa\paramsで書いたものがクエリストリングとしてaxios.getのURLの後ろにリクエストの条件として追加される．
        }
        // headers: {} とすればヘッダーも指定できる
    }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    makeImages(res.data);
    searchTermInput.value = '';
});

const makeImages = (results) => {
    for (let result of results) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
