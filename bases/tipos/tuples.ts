(() => {

    //Ejemplo de una tupla
    const hero: [string, number, boolean] = ['Dr Strange', 100, true];

    hero[0] = 'Ironman'
    hero[1] = 60
    hero[2] = false

    console.log(hero)

})()

/**
 * Las tuplas permiten controlar qué valores, qué tipo de dato tiene lo que parece un arreglo
 * pero es una tupla
*/