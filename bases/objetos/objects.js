"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
});
