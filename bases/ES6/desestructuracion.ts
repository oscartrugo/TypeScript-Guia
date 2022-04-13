(() => {

    type Avengers = { //Creamos el tipo Avengers
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = { //Creamos el objeto 'avengers' de tipo 'Avengers'
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.45345
    }

    // const {poder, vision} = avengers //Sacamos del objeto avengers las propiedades poder, vision
    // console.log(poder.toFixed(2), vision.toUpperCase())

    const printAvenger = ( { ironman, ...resto }:Avengers)=>{//Hacemos desestructuración del objeto
        console.log(ironman, resto) //Imprimimos las propiedades
    }

    // printAvenger(avengers)

    const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.12]
    const [capi, ironman, ] = avengersArr
    // console.log({capi, ironman})


})()