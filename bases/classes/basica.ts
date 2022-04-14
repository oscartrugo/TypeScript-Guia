(() => {

    class Avenger {
        private name: string; //Sólo tenemos acceso a esta propiedad dentro de la clase
        private team: string;
        public realName?: string;
        static avgAge: number = 35; //static 

        constructor(name: string, team: string, realName: string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Ron');
    console.log(antman)
    console.log(Avenger.avgAge) //Las props estáticas se pueden consumir de manera global haciendo referencia a la clase



})()