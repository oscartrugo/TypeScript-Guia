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
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(Avenger.getavgAge());
})();
//# sourceMappingURL=main.js.map