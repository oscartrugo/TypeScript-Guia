
import { Pokemon } from './decorators/pokemon-class';



const charmander = new Pokemon('Charmander');
//El objeto no es extendible
// (Pokemon.prototype as any).customName = 'Pikachu';  //No se puede añadir una propiedad debido que está bloqueado por el decorador

//console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(3);
charmander.publicAPI = 'https://fernando-herrera.com'
console.log(charmander)