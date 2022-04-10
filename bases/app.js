"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["Acuaman"] = 0] = "Acuaman";
        Fuerza[Fuerza["Batman"] = 1] = "Batman";
        Fuerza[Fuerza["Flash"] = 5] = "Flash";
        Fuerza[Fuerza["Superman"] = 100] = "Superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaBatman = Fuerza.Batman;
    const fuerzaAcuaman = Fuerza.Acuaman;
    const fuerzaFlash = Fuerza.Flash;
    const fuerzaSuperman = Fuerza.Superman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
/**
 * Por defecto, undefined es asignable a una variable de tipo Null.
 */ 
