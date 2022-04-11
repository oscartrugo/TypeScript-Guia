(() => {

    const addNumbers = (a: number, b: number) => a+b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado!'

    // let myFunction: Function; //Solo acepta funciones
    let myFunction: () => string; //Solo acepta funciones

    // myFunction = 10
    // console.log(myFunction)

    // myFunction = addNumbers //Esta función se la asignamos a myFunction
    // console.log(myFunction(1, 2)) //TS infiere que los argumentos son numbers

    // myFunction = greet
    // console.log('Oscar')

    myFunction = saveTheWorld
    console.log(myFunction()) //TypeScript infiere los tipos

})()