
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

//Decorador para bloquear el prototipo de una clase, no se va a poder expandir
const bloquearPrototipo = function(constructor: Function){
    // Object.seal(constructor)
    // Object.seal(constructor.prototype)
}

function CheckValidPokemonId(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if(id < 1 || id > 800){
                return console.error('El ID del pokemon debe estar entre 1 y 800.')
            }else{
                return originalMethod(id);
            }
        }
        // descriptor.value = () => console.log('Hola mundo');
        
    }
}
//factory decorator
function readonly( isWritable: boolean = true ):Function{
    return function(target:any, propertyKey:string){
        const descriptor : PropertyDescriptor = {
            get(){
                console.log(this, 'getter')
                return 'Oscar'
            },
            set(this, val){ //Sólo se dispara si está en modo lectura,  this = instancia de la clase
                // console.log(this, val)
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        return descriptor;
    }
}

//Decoradores
@bloquearPrototipo
@printToConsoleContidional(false)

export class Pokemon {
    @readonly(true)
    public publicAPI: string = 'https://pokeapi.co'
    constructor(
        public name: string,
    ){}

    @CheckValidPokemonId() //La mandamos a llamar porque es un factory decorator, se tiene que ejecutar
    savePokemonToDB(id: number){
        console.log(`Pokemon guardado en base de datos ${id}`)
    }
}