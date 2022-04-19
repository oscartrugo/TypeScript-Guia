import axios from 'axios';
import { Pokemon } from '../interfaces';


                //Async hace que su retorno inmeadiato sea una promise
export const getPokemon = async(pokemonId: number) : Promise<Pokemon> => { //async transforma la función a que regrese una promesa
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    //console.log(data)
    
    return data; //Retornamos respuesta de tipo Pokemon
}