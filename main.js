var apiLink;
var pokesheet = "./pokemon.json";
var apiPermittedName;

let pokemon;
let pokemon1; 
let pokemon2;

apiLink = 'https://pokeapi.co/api/v2/pokemon/tyrantrum'


fetch(apiLink)
 .then((resp) => resp.json())
 .then((data) => {
    pokemon = {
        name: data.name,
        id: data.id, 
        type: data.types.map((type) => type.type.name).join(', '),
        ability: data.abilities.map((abilities) => abilities.ability.name).join(', '),
        moves: data.moves.map((moves) => moves.move.name)
    };
 })
    
function dothisk(){
    console.log(pokemon.name);
    console.log(pokemon.id);
    console.log(pokemon.type);
    console.log(pokemon.ability);
    console.log(pokemon.moves);
}

function dothisF(){
    console.log(pokemon2.name);
}


//IDEAS AND TODOS:
// have each pokemon be loaded in dynamically through a loop with a cap
// whatever the current number of pokemon entries are in the api
// goal : not have to manually type out and create entries for the any specific pokemon 