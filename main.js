var apiLink;
var apiPermittedName;
let pokemon; 
apiLink = 'https://pokeapi.co/api/v2/pokemon/tyrantrum'

async function pokeListImporter(){
    const response = await fetch("./pokemon.json");
    const pokelist = await response.json()
    console.log(pokeList);
}

fetch(apiLink).then((response) => response.json()).then((data) =>{
    console.log(data);
    pokemon = {
        name: data.name,
        id: data.id,
        // This is setting the data for the constant with type:, referencing the data from the api is
        // stored in a map, that each entry is called a type, and within each type entry we want
        // to pull the "name" property of that type 
        type: data.types.map((type) => type.type.name).join(', '),
        moves: data.moves.map((moves) => moves.move.name)
    }})

function dothisk(){
    //console.log(pokemon.type);
    //console.log(pokemon.name);
    console.log(pokemon.moves);
    }

//IDEAS AND TODOS:
// have each pokemon be loaded in dynamically through a loop with a cap
// whatever the current number of pokemon entries are in the api
// goal : not have to manually type out and create entries for the any specific pokemon 