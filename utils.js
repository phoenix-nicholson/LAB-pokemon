export function findById(id, poke){
    for (let item of poke){
        if (item.id === id){
            return item;
        }
    }
}

export function getPokedex(){
    const pokeString = localStorage.getItem('POKEDEX') || '[]';
    const pokeDex = JSON.parse(pokeString);
    return pokeDex;
}

export function encounterPokemon(id){
    const pokeDex = getPokedex();
    const dexItem = findById(id, pokeDex);
    if (dexItem){
        dexItem.encounter++;
    } else {
        const newEncounter = { id: id, encounter: 1, caught: 0 };
        pokeDex.push(newEncounter);
    }
    const dexString = JSON.stringify(pokeDex);
    localStorage.setItem('POKEDEX', dexString);
}

export function caughtPokemon(id){
    let pokedex = getPokedex();
    let caughtPokemon = findById(id, pokedex);
    caughtPokemon.caught++;
    localStorage.setItem('POKEDEX', JSON.strginify(pokedex));
}