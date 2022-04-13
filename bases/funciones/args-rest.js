"use strict";
(() => {
    const fullName = (firstName, ...restoDeNombres) => {
        return `${firstName} ${restoDeNombres.join('')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map