
export interface Power { //Interface de poderes
    id: number,
    desc: string //Descripción del poder
}

const powers:Power[] = [ //Constante tipada como arreglo de poderes
    { //Objeto de Powers, primer elemento del arreglo
        id: 1,
        desc: 'Money'
    },
    { //Objeto de Powers, segundo elemento del arreglo
        id: 2,
        desc: 'Drugs'
    }
]

export default powers;