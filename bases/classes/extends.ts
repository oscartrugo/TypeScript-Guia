(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
            console.log('Constructor Avenger llamado')
        }

        private getFullName(){
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

        getFullNameDesdeXmen(){
            console.log(super.getFullName())
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)

    console.log(wolverine)
    wolverine.getFullNameDesdeXmen();

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