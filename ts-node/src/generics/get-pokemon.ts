import axios from 'axios';

export const getPokemon = async(pokemonId: number) => { //async transforma la función a que regrese una promesa
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    console.log(resp)
    
    return 1;
}