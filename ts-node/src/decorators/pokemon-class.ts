
function printToConsole(constructor: Function){ //Decorador que se aplica a la clase
    console.log(constructor) //Retorna el constructor de la misma
}

const printToConsoleContidional = (print: boolean = false):Function => {
    if(print){
        return printToConsole; //Mandamos como referencia a la función, no la estamos ejecutando
    }else{
        return () => {} //Retornamos una función vacía
    }
}

@printToConsoleContidional(true)

export class Pokemon {
    public publicAPI: string = 'https://pokeapi.co'
    constructor(
        public name: string,
    ){}
}