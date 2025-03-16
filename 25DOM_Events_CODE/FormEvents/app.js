const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // この文によって，formのデフォルトの操作であるページを飛んだり，一旦リフレッシュする操作を止めることができる．
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    // form要素のnameの属性にアクセスできる書きかた．elementsの中にnameがキーとして，isnputが値として入っている?
    // .valueでformに書いた内容を抽出することができる．入れることもできる．
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);

    usernameInput.value = '';
    tweetInput.value = '';
    // 初期状態に戻す
    // console.log('submit!!');
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetsContainer.append(newTweet);
    // この最後の文がなければ一覧に表示されない


    // newList.textContent = `${product} × ${num}`;
    // newList.append(`${product} × ${num}`);  上と同じ

    // ul.appendChild(newList);
    // ul.append(newList);  上と同じ
}