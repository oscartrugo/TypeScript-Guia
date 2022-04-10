(() => {
    const fullName = (firstName:string, lastName?:string):string =>{ //Se requieren ambos argumentos
        return `${firstName} ${lastName}`
    }

    let noName: string;
    noName = 'Oscar'

    const name = fullName(noName) //El ? en el argumento lastName permite no introducir el segundo argumento 

    console.log({name})
})