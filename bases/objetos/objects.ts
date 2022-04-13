(() => {

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = { //Objeto literal de JavaScript
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'viajar en el tiempo']
    }

    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = { //Objeto literal de JavaScript
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad']
    }  

    console.log(flash)

})