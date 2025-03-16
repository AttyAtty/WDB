const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    // Camelケースなので，cssで書くみたいにbackground-colorではないことに注意
    // 色の指定はrgb(x,y,z)の書き方で指定できるので文字列newColorを代入して大丈夫．
    h1.innerText = newColor;
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // floorは切り捨て
    return `rgb(${r}, ${g}, ${b})`;
}