(()=>{

    interface Client { //Interfaz principal
        name: string,
        age?: number, 
        address: Address //Interfaz secundaria
        getFullAddress(id: string):string; //Método que recibe y retorna un string
        /**
         * Una clase implementaría sí o sí este método, una interfaz no lo implementa.
         */
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client:Client = {
        name: 'Oscar',
        age: 24,
        address: {
            id: 125,
            zip: 'KDCRNW',
            city: 'New York'
        },
        getFullAddress(id:string) {
            return this.address.city;
        } 
    }

    const client2:Client = {
        name: 'Diana',
        age: 23,
        address: {
            id: 234,
            zip: 'ola',
            city: 'Toronto'
        },
        getFullAddress(id:string) {
            return this.address.city;
        } 
    }
    
})()

/**
 * Las interfaces anidadas van de principal a secundarias.
 * Es decir, si existe una interfaz dentro de otra interfaz, la primera en declararse es la principal,
 * posteriormente se declaran las secundarias
 * 
 * Las interfaces no existen en JavaScript, no hay traducción literal.
 */