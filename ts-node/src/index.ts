import { printObject, genericFunction, genericFunctionArrow } from "./generics/generics";


const name:string = 'Oscar';

console.log( genericFunctionArrow(3.14156).toFixed(2) )
console.log( genericFunction(3.14156).toFixed(2) )
console.log( genericFunction(name).toUpperCase() )
console.log( genericFunction(new Date()).getDate() )




