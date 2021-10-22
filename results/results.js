
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
    resultsSpan1.textContent = `Encounters: ${item.encounter} `
    ;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Caught: ${item.caught}`;

    div.append(header, img, resultsSpan1, resultsSpan2);
    main.append(div);
}

const names = pokeDex.map((item)=>{
    const pokeChart = findById(item.id, poke);
    return pokeChart.pokemon;
});
const caught = pokeDex.map(item=>item.caught);
var ctx = document.getElementById('resultsChart').getContext('2d');
console.log(ctx);
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Picked',
            data: caught,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}); 
