(() => {

    let flash: { name: string, age?: number, powers: string[] } = { //Objeto literal de JavaScript
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'viajar en el tiempo']
    }

    flash = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Super fuerza'],
        // getNombre(){
        //     return this.name;
        // }
    }

    console.log(flash)
})