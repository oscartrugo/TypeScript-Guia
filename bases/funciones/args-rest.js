"use strict";
(() => {
    //Sólo pedimos uno, los demás son dinámicos
    const fullName = (firstName, ...restoDeNombres) => {
        return `${firstName} ${restoDeNombres.join('')}`; //Unimos el primer parámetro con todas las demás
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map