(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
            console.log('Constructor Avenger llamado')
        }

        protected getFullName(){
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger{
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName) //Trae los argumentos del constructor de la clase padre Avenger
            console.log('Constructor Xmen llamado')
        }

        get fullName(): string{ //Getter por defecto tiene que regresar un valor
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string){ //El método setter recibe un argumento (sólo uno), pero no retorna nada (el opuesto al getter)
            if(name.length < 3){ //Si el argumento recibido es menor a 3
                throw new Error('El nombre debe ser mayor de 3 letras.') //Arroja un nuevo error
            }
            this.name = name //El argumento del scope anterior es igual al argumento del setter
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullName())
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)

    wolverine.fullName = 'Os' //Al recibir un nombre, el valor cae al setter y no al getter
    console.log("Setter: " + wolverine.fullName) //Mandamos a llamar el método getter "fullName"
    //wolverine.getFullNameDesdeXmen();

    const nuevoAvenger = new Avenger('Hola', 'Mundo')
})()

/**
 * Diferencia entre private y protected.
 * Los métodos protegidos sólo se pueden acceder a ellos dentro de la misma clase o dentro
 * de clases que extiendan de él.
 * 
 * En los private sólo se puede acceder si y sólo si se está dentro de la clase 
 * en la cual se define. Afuera no se tiene acceso a él.
 */

/**
 * Un getter y setter son métodos.
 * 
 */