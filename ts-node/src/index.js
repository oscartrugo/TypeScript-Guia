define(["require", "exports", "./decorators/pokemon-class"], function (require, exports, pokemon_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const charmander = new pokemon_class_1.Pokemon('Charmander');
    //El objeto no es extendible
    // (Pokemon.prototype as any).customName = 'Pikachu';  //No se puede añadir una propiedad debido que está bloqueado por el decorador
    //console.log(charmander.savePokemonToDB(50));
    // charmander.savePokemonToDB(3);
    charmander.publicAPI = 'https://fernando-herrera.com';
    console.log(charmander);
});
