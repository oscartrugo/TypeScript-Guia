import { genericFunctionArrow } from "./generics/generics"
import {Hero} from './interfaces/hero'

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




