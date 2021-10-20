// import functions and grab DOM elements
import pokemon from './pokemon.js';

// console.log(pokemon);

const pokeImg1 = document.getElementById('poke-img-1');
const pokeImg2 = document.getElementById('poke-img-2');
const pokeImg3 = document.getElementById('poke-img-3');
const button = document.getElementById('select');

const generatePoke = ()=> {
  
    let randPoke1 = Math.floor(Math.random() * pokemon.length);
    let randPoke2 = Math.floor(Math.random() * pokemon.length);
    let randPoke3 = Math.floor(Math.random() * pokemon.length);
    
  
    while (
        randPoke1 === randPoke2 ||
    randPoke1 === randPoke3 ||
    randPoke2 === randPoke3
    ) {
        randPoke1 = Math.floor(Math.random() * pokemon.length);
        randPoke2 = Math.floor(Math.random() * pokemon.length);
        randPoke3 = Math.floor(Math.random() * pokemon.length);
    }
    let poke1 = pokemon[randPoke1];
    pokeImg1.src = poke1.url_image;

    let poke2 = pokemon[randPoke2];
    pokeImg2.src = poke2.url_image;

    let poke3 = pokemon[randPoke3];
    pokeImg3.src = poke3.url_image;
};

generatePoke();

button.addEventListener('click', ()=> {
  
    generatePoke();
});
    