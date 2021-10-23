// import functions and grab DOM elements
import pokemon from './Data/pokemon.js';
import { caughtPokemon, encounterPokemon } from './utils.js';
// console.log(pokemon);

const pokeImg1 = document.getElementById('poke-img-1');
const pokeImg2 = document.getElementById('poke-img-2');
const pokeImg3 = document.getElementById('poke-img-3');
const pokeRadio1 = document.getElementById('radio-1');
const pokeRadio2 = document.getElementById('radio-2');
const pokeRadio3 = document.getElementById('radio-3');
const captureButton = document.getElementById('select');

const pokemonEncountered = ()=> {
  
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
    encounterPokemon(poke1.id);
    pokeImg1.src = poke1.url_image;
    pokeRadio1.value = poke1.id;

    let poke2 = pokemon[randPoke2];
    encounterPokemon(poke2.id);
    pokeImg2.src = poke2.url_image;
    pokeRadio2.value = poke2.id;
    
    let poke3 = pokemon[randPoke3];
    encounterPokemon(poke3.id);
    pokeImg3.src = poke3.url_image;
    pokeRadio3.value = poke3.id;
};

pokemonEncountered();
// encounterPokemon();
let totalPlays = 0;

captureButton.addEventListener('click', ()=> {
    const caughtRadio = document.querySelector('input[type=radio]:checked');
    const caughtId = Number(caughtRadio.value);

    
    if (caughtRadio){ 
        // console.log(caughtId);
        caughtPokemon(caughtId);
        totalPlays++;
    }
    if (totalPlays >= 10) {
        window.location.href = './results/index.html';
    } else {
        pokemonEncountered();
    }
});
    