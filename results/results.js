import poke from '../Data/pokemon.js';
import { getPokedex, findById } from '../utils.js';

const pokeDex = getPokedex();


const main = document.getElementById('main');

for (let item of pokeDex){
    const pokemonCaught = findById(item.id, poke);
    
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = pokemonCaught.url_image;
    const header = document.createElement('h2');
    
    header.textContent = pokemonCaught.pokemon;
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Encounter: ${item.encounter}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Caught: ${item.caught}`;

    div.append(header, img, resultsSpan1, resultsSpan2);
    main.append(div);

}
