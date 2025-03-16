const h1 = document.querySelector('h1');
const button = document.querySelector('button');

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


button.addEventListener('click', () => {
    newColor = makeRandColor();
    h1.innerText = newColor;
    document.body.style.backgroundColor = newColor;
})
