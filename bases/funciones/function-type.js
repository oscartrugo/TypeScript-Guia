"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado!';
    // let myFunction: Function; //Solo acepta funciones
    let myFunction; //Solo acepta funciones
    // myFunction = 10
    // console.log(myFunction)
    // myFunction = addNumbers //Esta función se la asignamos a myFunction
    // console.log(myFunction(1, 2)) //TS infiere que los argumentos son numbers
    // myFunction = greet
    // console.log('Oscar')
    myFunction = saveTheWorld;
    console.log(myFunction()); //TypeScript infiere los tipos
})();
//# sourceMappingURL=function-type.js.map