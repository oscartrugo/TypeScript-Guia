import powers from "../data/powers";

export class Hero { //Exportamos la clase Hero
    constructor(
        public name: string,
        public powerId: number,
        public age: number,
    ){}

    get power(): string{                                    // ! significa que siempre lo va a encontrar
        return powers.find(power=>power.id === this.powerId)?.desc || 'not found'; //Retorna la descripción
        //del poder que coincida con el número actual del objeto Ironman
        /**
         * Si en el arreglo powers existe el número de poder que se le asigne al nuevo objeto en index.ts,
         * entonces se lee la descripción del poder. En caso que no exista, imprime 'not found'
         */
    }

}

export class Hero2{}
export class Hero3{}
export class Hero4{}

export const PI = 3.1416;
export const miNombre = 'Oscar'