(() => {

    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange'
    // console.log(avenger.charAt(0))
    console.log((avenger as string).charAt(0)) //as string es propio de typescript

    avenger = 150.23423442
    console.log(<number>avenger.toFixed(2)) //Tipamos la variable 'avenger' a number

    console.log(exists)
    console.log(power)

})()