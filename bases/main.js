"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge2 = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getavgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
    const nuevoAvenger = new Avenger('Hola', 'Mundo');
})();
//# sourceMappingURL=main.js.map