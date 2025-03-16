const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets'); //ul

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);

    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetsContainer.append(newTweet);
}

// ここまでは何個か前の講義のプログラムと同じ．

// targetはMouseEventの中の要素で，追加したりなにか処理を施した要素そのものを指す．taogetがliを指すので，新しいli要素に対しても処理が可能．
tweetsContainer.addEventListener('click', function (e) {
    // if (e.target.nodeName === 'LI') {
    //     e.target.remove();
    // } else if (e.target.nodeName === 'B') {
    //     e.target.parentElement.remove();
    // }
    // e.target.nodeName === 'LI' && e.target.remove();

    if (e.target.nodeName === 'LI' || e.target.nodeName === 'B') {
        e.target.closest('LI').remove();
        //  closestは直近にある〇〇(引数)に対して操作を行うということ
    }
    // nodeNameは大文字．
})

// 下のプログラムでulにあったメソッドは取り除けるが，新しく追加したulに対しては効果なし．liに対して実行されていないから．
// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }
