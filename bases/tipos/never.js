"use strict";
(() => {
    //La funcion regresa never o un number
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio!');
    console.log('Hola mundo');
})();
/**
 * Never significa que la funciíon no puede terminar exitosamente
 */ 
//# sourceMappingURL=never.js.map