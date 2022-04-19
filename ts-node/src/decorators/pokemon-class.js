var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pokemon = void 0;
    function printToConsole(constructor) {
        console.log(constructor); //Retorna el constructor de la misma
    }
    const printToConsoleContidional = (print = false) => {
        if (print) {
            return printToConsole; //Mandamos como referencia a la función, no la estamos ejecutando
        }
        else {
            return () => { }; //Retornamos una función vacía
        }
    };
    //Decorador para bloquear el prototipo de una clase, no se va a poder expandir
    const bloquearPrototipo = function (constructor) {
        // Object.seal(constructor)
        // Object.seal(constructor.prototype)
    };
    function CheckValidPokemonId() {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = (id) => {
                if (id < 1 || id > 800) {
                    return console.error('El ID del pokemon debe estar entre 1 y 800.');
                }
                else {
                    return originalMethod(id);
                }
            };
            // descriptor.value = () => console.log('Hola mundo');
        };
    }
    //Decoradores
    let Pokemon = class Pokemon {
        constructor(name) {
            this.name = name;
            this.publicAPI = 'https://pokeapi.co';
        }
        savePokemonToDB(id) {
            console.log(`Pokemon guardado en base de datos ${id}`);
        }
    };
    __decorate([
        CheckValidPokemonId() //La mandamos a llamar porque es un factory decorator, se tiene que ejecutar
    ], Pokemon.prototype, "savePokemonToDB", null);
    Pokemon = __decorate([
        bloquearPrototipo,
        printToConsoleContidional(false)
    ], Pokemon);
    exports.Pokemon = Pokemon;
});
