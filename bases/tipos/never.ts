(() => {
                                    //La funcion regresa never o un number
    const error = (message: string):(never|number) => { //Especificamos una funcion cuyo tipo de dato de retorno es 'never'
        throw new Error(message)
    }

    error('Auxilio!')
    console.log('Hola mundo')


})()


/**
 * Never significa que la funciíon no puede terminar exitosamente
 */