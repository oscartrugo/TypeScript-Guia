(() => {

    class Avenger {
        //private name: string = 'Scott Lang'; //Sólo tenemos acceso a esta propiedad dentro de la clase
        //private team: string;
        //public realName?: string;
        static avgAge: number = 35; //No podemos mandar static prop como argumento al constructor 

        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string,
            avgAge2: number = 55,
            ){
                //Avenger.avgAge = avgAge2
            }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman)
    console.log(Avenger.avgAge) //Las props estáticas se pueden consumir de manera global haciendo referencia a la clase



})()