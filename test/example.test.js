// IMPORT MODULES under test here:
// import { example } from '../example.js';
import pokemon from '../Data/pokemon.js';
import { findById, getPokedex, encounterPokemon } from '../utils.js';
const test = QUnit.test;

test('findById shuld return poke info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, pokemon);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('getPokedex should return poke info', (expect) => {
    localStorage.removeItem('POKEDEX');
    const expected = [
        { id: 1, pokemon: 'bulbasaur', encounter: 0, caught: 0 } 
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(expected));
    const actual = getPokedex();
    expect.deepEqual(expected, actual);
});

test('encounterPokemon should increment the quantity of encounters', (expect)=>{
    localStorage.removeItem('POKEDEX');
    const fakeDex = [
        { id: 1, pokemon: 'bulbasaur', encounter: 1, caught: 0 },
        { id: 5, pokemon: 'charmander', encounter: 0, caught: 0 }
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(fakeDex));
    encounterPokemon(1);
    const pokedex = getPokedex();
    const expected = [
        { id: 1, pokemon: 'bulbasaur', encounter: 2, caught: 0 },
        { id: 5, pokemon: 'charmander', encounter: 0, caught: 0 }
    ];
    expect.deepEqual(pokedex, expected);
});

test('encounterPokemon should add pokemon to pokedex if  not in pokedex already', (expect)=>{
    localStorage.removeItem('POKEDEX');

    const testPokedex = [];
    localStorage.setItem('POKEDEX', JSON.stringify(testPokedex));
    encounterPokemon(1);
    const pokedex = getPokedex();
    const expected = [ 
        { id: 1, encounter: 1, caught: 0 }
    ];
    expect.deepEqual(pokedex, expected);
});

test('caughtPokemon should should increment amount of caught', (expect)=> {
    localStorage.removeItem('POKEDEX');
});