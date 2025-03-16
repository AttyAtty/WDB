const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function(e) {
    e.stopPropagation();
    // 親要素へのイベントのバブリングを止めたい時に書く．この要素でイベントが止まる．
    container.style.backgroundColor = makeRandColor();
})

container.addEventListener('click', function() {
    container.classList.add('hide');
    // hideは非表示にする機能を持つ
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

