import { genericFunctionArrow } from "../generics/generics"
import { Hero, Villain } from "../interfaces" //Importamos desde index.ts en interfaces


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log ( genericFunctionArrow<Hero>(deadpool).realName ) //Con los paréntesis definimos el tipo Hero














// import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';


// const name:string = 'Oscar';

// console.log( genericFunctionArrow(3.14156).toFixed(2) )
// console.log( genericFunction(3.14156).toFixed(2) )
// console.log( genericFunction(name).toUpperCase() )
// console.log( genericFunction(new Date()).getDate() )




