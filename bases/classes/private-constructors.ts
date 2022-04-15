(()=>{

    class Apocalipsis {

        static instance:Apocalipsis;
        private constructor(public name: string){

        }

        static callApocalipsis():Apocalipsis{ //Método que llama una instancia de Apocalipsis
            if(!Apocalipsis.instance){ //Creamos la instancia si el valor es undefined o null
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el único'); //Retornamos la instancia
            }
            return Apocalipsis.instance //Retorna la instancia
        }

        changeName( newName: string ):void{
            this.name = newName;
        }

    }

    const apocalipsis1 = Apocalipsis.callApocalipsis(); //Llamamos el método static
    const apocalipsis2 = Apocalipsis.callApocalipsis(); //Llamamos el método static
    const apocalipsis3 = Apocalipsis.callApocalipsis(); //Llamamos el método static

    apocalipsis1.changeName('Xavier') 

    console.log(apocalipsis1, apocalipsis2, apocalipsis3)

    

})()

/**
 * Los constructores privados sirven para controlar la manera en la que
 * las instancias son ejecutadas. Ejemplos: singleton (única instancia
 * a través de toda la aplicación)
 * 
 */