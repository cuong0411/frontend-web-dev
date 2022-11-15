// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
let link = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 100; i++) {
    const pokemon = document.createElement('div');
    const spanEle = document.createElement('span');
    const img = document.createElement('img');

    spanEle.innerText = `#${i}`;
    img.src = `${link}${i}.png`;

    pokemon.classList.add('pokemon');
    // img.classList.add('pokemon img');

    pokemon.appendChild(img);
    pokemon.appendChild(spanEle);
    container.appendChild(pokemon);
}