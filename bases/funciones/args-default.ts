(() => {
    const fullName = (firstName:string, lastName?:string, upper: boolean = false):string =>{ //Se requieren ambos argumentos
        if(upper){ //si upper es true retorna...
            return `${firstName} ${lastName || '------'}`.toUpperCase();
        }else{ //Si es false retorna...
            return `${firstName} ${lastName || '------'}`;
        }
    }

    const name = fullName('Oscar', 'Trujillo', true) //El ? en el argumento lastName permite no introducir el segundo argumento 

    console.log({name})
})