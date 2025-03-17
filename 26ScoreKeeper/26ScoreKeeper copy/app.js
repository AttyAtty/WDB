const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            // bulmaにある色．統一感出すために．
            p2Button.disabled = true;
            p1Button.disabled = true;
            // buttonを無効化するにはdisabledをtrueにする.bulmaに備わってる機能．
        }
    }
});

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p2Button.disabled = true;
            p1Button.disabled = true;
        }
    }
});

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    // .valueで持ってきた値はStringになるのでparceIntで数値に変える必要うあり．
    reset();
});
// changeにしたおかげで値が変わらなければ何も変化なし．値が変わった時だけ実行される．

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p1Score;
    isGameOver = false;
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Button.disabled = false;
    p1Button.disabled = false;
}

// リファクタ：外見は変えずに中身だけを変えてコードを読みやすくしたり変更を加えやすくすること．
// その変応済みのやつはコピーじゃないファイルに完成系があるのでそっちを見よう