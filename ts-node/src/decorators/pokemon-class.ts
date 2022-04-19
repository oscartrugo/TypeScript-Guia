
function printToConsole(constructor: Function){ //Decorador que se aplica a la clase
    console.log(constructor) //Retorna el constructor de la misma
}

@printToConsole

export class Pokemon {
    public publicAPI: string = 'https://pokeapi.co'
    constructor(
        public name: string,
    ){}
}