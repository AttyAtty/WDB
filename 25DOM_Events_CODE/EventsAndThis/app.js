const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize);
    // button.style.backgroundColor = makeRandColor();
    // button.style.color = makeRandColor();　と同じ
    // this = button
}

const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
    // h1.style.backgroundColor = makeRandColor();
    // h1.style.color = makeRandColor(); と同じ
    // this = h1
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
// イベント関数のthisは選択された要素のこと

// アロー関数のthisには注意．