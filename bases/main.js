"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName, avgAge2 = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map