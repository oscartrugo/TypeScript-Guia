(() => {

    interface Hero { //Establecemos el tipo de objeto que tomaremos para declarar los demas objetos
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string;
    }
        //Flash es un objeto de tipo Hero, hereda todos sus atributos y métodos
    let flash: Hero = { //Objeto literal de JavaScript
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'viajar en el tiempo']
    }

    let superman: Hero = { //Objeto literal de JavaScript
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad']
    }  

    let arrow: Hero = { //Objeto literal de JavaScript
        name: 'Oliver Queen',
        age: 32,
        powers: ['Artes marciales', 'Arqueria', 'Liderazgo']
    } 

    

})()