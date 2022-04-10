(() => {

    let avengers:number = 10;
    console.log(avengers)

    const villians: number = 20
    
    if(avengers<villians){
        console.log('Estamos en problemas')
    }else{
        console.log('Nos salvamos')
    }

    avengers = Number('55A') //Retorna not a number, que es considerado un número

    console.log({avengers})

})()