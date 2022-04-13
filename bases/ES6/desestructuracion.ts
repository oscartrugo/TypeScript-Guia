(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.45345
    }

    // const {poder, vision} = avengers //Sacamos del objeto avengers las propiedades poder, vision
    // console.log(poder.toFixed(2), vision.toUpperCase())

    const printAvenger = ( { ironman, ...resto }:Avengers)=>{
        console.log(ironman, resto)
    }

    printAvenger(avengers)


})()