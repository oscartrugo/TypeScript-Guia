(() => {
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante{
        salvarMundo(){
            return 'Mundo a salvo'
        }
    }
    class Villian extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado'
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan')
    const magneto: Villian = new Villian('Magneto', 'Magnus')
    
    
    // console.log(wolverine.salvarMundo())
    // console.log(magneto.conquistarMundo())

    const printName = ( character: Mutante ) => {
        console.log(character.name)
    }

    printName(magneto)


})()

/**
 * No se pueden crear instancias de las clases abstractas.
 * Las clases abstractas sirven para crear otras clases o asegurarse que otras clases
 * implementen lo que nosotros queramos. 
 * 
 * Aparte de crear clases, las clases abstractas especifican que estamos esperando una clase,
 * objeto o argumento que sea extendido.
 * 
 * Asegura que un argumento puede ser otro tipo siempre y cuando implemente las características de su
 * clase abstracta. 
 * 
 */