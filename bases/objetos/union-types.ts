(() => {

    type Hero = { //Establecemos el tipo de objeto que tomaremos para declarar los demas objetos
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Son Goku'
    console.log(typeof myCustomVariable)

    myCustomVariable = 20
    console.log(typeof myCustomVariable)

    
    myCustomVariable = {
        name: 'Son Gohan',
        age: 18,
        powers: [50000000],
    }
    console.log(typeof myCustomVariable)
    console.log(myCustomVariable)

})()