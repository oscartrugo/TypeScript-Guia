(()=>{

    interface Xmen {
        name: string,
        realName: string,
        mutantPower(id:number):string;
    }

    interface Human {
        age: number,

    }

    class Mutant implements Xmen, Human { //En lugar de extends, utilizamos implements para implementar la interfaz
        public age: number;
        public name: string;
        public realName: string;

        mutantPower(id: number): string {
            return this.name + '' + this.realName;
        }
    }


})()

/**
 * Preferible trabajar con interfaces si se sabe si las interfaces van a poder crecer.
 * Se usa un tipo cuando se está seguro totalmente que no va a extenderse, expandirse o nada.
 * Ejem: patrones redux, acciones que no varían o crecen
 * 
 */