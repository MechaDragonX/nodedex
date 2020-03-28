import * as Pokedex from 'pokedex-promise-v2';
const dex = new Pokedex();

const getPokemonDataReq = async (req, res) => {
    try {
        return await dex.getPokemonByName(req.params.pokemon);
    } catch(e) {
        console.log('ERROR: ', e);
        res.render('national', {
            title: 'National Pokédex',
            error: true,
            message: 'The Pokémon was not found! Either the Pokémon doesn\'t exist, or is a Generation 8 Pokémon, whcih the API doesn\'t support yet!'
        });
    }
};
const getPokemonSpeciesDataReq = async (req) => {
    try {
        return await dex.getPokemonSpeciesByName(req.params.pokemon);
    } catch(e) {
        console.log('ERROR: ', e);
    }
}
const getPokemonData = async (pokemon, res) => {
    try {
        return await dex.getPokemonByName(pokemon);
    } catch(e) {
        console.log('ERROR: ', e);
        res.render('national', {
            title: 'National Pokédex',
            error: true,
            message: 'The Pokémon was not found! Either the Pokémon doesn\'t exist, or is a Generation 8 Pokémon, whcih the API doesn\'t support yet!'
        });
    }
};
const getPokemonSpeciesData = async (pokemon) => {
    try {
        return await dex.getPokemonSpeciesByName(pokemon);
    } catch(e) {
        console.log('ERROR: ', e);
    }
}

module.exports = {
    getPokemonDataReq,
    getPokemonSpeciesDataReq,
    getPokemonData,
    getPokemonSpeciesData
};
