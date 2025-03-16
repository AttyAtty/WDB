// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container'); //クラスとかidの時は＃とか．を忘れないように
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++) {
    const div = document.createElement('div');
    div.classList.add('pokemon');
    const img = document.createElement('img');
    const span = document.createElement('span');
    img.src = `${baseURL}${i}.png`;
    span.innerText = `#${i}`;
    div.appendChild(img);
    div.appendChild(span);
    container.appendChild(div); //これ忘れないで
}
/* <div>
    <img></img>
    <span>#2</span>
</div> */