(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcán Negro`;

    const abc = "I'm vengance"

    console.log(`I'm ${batman}, ${abc}`);

    console.log(batman[10]?.toUpperCase() || 'No está Batman'); // ? = if

})()