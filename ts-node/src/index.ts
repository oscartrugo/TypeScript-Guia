import { printObject, genericFunction } from './generics/generics';

console.log( genericFunction(3.1416).toFixed(2) )
console.log( genericFunction(new Date()).toFixed(2) )
/**
 * 
 * Funciones genéricas son funciones que pueden recibir cualquier tipo de argumento.
 * 
 */