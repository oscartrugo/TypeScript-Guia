define(["require", "exports", "./generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Winston Wilson',
        dangerLevel: 130
    };
    console.log((0, generics_1.genericFunctionArrow)(deadpool).realName); //Con los paréntesis definimos el tipo Hero
});
// import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';
// const name:string = 'Oscar';
// console.log( genericFunctionArrow(3.14156).toFixed(2) )
// console.log( genericFunction(3.14156).toFixed(2) )
// console.log( genericFunction(name).toUpperCase() )
// console.log( genericFunction(new Date()).getDate() )
