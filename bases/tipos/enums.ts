(() => {
    //Propiedad de TS
    enum AudioLevel {
        min,
        medium, 
        max
    }

    let currentAudio = AudioLevel.max;

    console.log(currentAudio)
    console.log(AudioLevel)

})()

/**
 * El uso de las enumeraciones ayuda a trabajar con valores que tengan un sentido
 * semántico fácil de leer, valores que tengan sentido al momento de leer el código
 * 
 */