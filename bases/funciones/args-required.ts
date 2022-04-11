(() => {
    const fullName = (firstName:string, lastName:string) =>{ //Se requieren ambos argumentos
        return `${firstName} ${lastName}`
    }

    let noName: string;
    noName = 'Oscar'

    const name = fullName(noName, 'Trujillo') //Parámetros obligatorios

    console.log({name})
})