"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad']
    };
    let arrow = {
        name: 'Oliver Queen',
        age: 32,
        powers: ['Artes marciales', 'Arqueria', 'Liderazgo']
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.age = 4;
            this.name = 'oscartrugo';
            this.realName = 'Oscar';
        }
        mutantPower(id) {
            return this.name + '' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Oscar',
        age: 24,
        address: {
            id: 125,
            zip: 'KDCRNW',
            city: 'New York'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Diana',
        age: 23,
        address: {
            id: 234,
            zip: 'ola',
            city: 'Toronto'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (b, c) => {
        return b + c;
    };
    console.log(addNumbersFunction(5, 7));
})();
//# sourceMappingURL=main.js.map