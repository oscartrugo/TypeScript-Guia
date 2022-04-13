"use strict";
(() => {
    //Propiedad de TS
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
/**
 * El uso de las enumeraciones ayuda a trabajar con valores que tengan un sentido
 * semántico fácil de leer, valores que tengan sentido al momento de leer el código
 *
 */ 
//# sourceMappingURL=enums.js.map