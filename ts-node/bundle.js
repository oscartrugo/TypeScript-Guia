var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("src/generics/generics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericFunction = exports.printObject = void 0;
    const printObject = (argument) => {
        console.log(argument);
    };
    exports.printObject = printObject;
    function genericFunction(argument) {
        return argument;
    }
    exports.genericFunction = genericFunction;
});
define("src/index", ["require", "exports", "src/generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name = 'Oscar';
    console.log((0, generics_1.genericFunction)(name).toUpperCase());
    console.log((0, generics_1.genericFunction)(3.1416).toFixed(2));
    console.log((0, generics_1.genericFunction)(new Date()).getDate());
});
/**
 *
 * Funciones genéricas son funciones que pueden recibir cualquier tipo de argumento.
 *
 */ 
define("src/data/powers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const powers = [
        {
            id: 1,
            desc: 'Money'
        },
        {
            id: 2,
            desc: 'Drugs'
        }
    ];
    exports.default = powers;
});
define("src/classes/Hero", ["require", "exports", "src/data/powers"], function (require, exports, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.miNombre = exports.PI = exports.Hero4 = exports.Hero3 = exports.Hero2 = exports.Hero = void 0;
    powers_1 = __importDefault(powers_1);
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            var _a;
            return ((_a = powers_1.default.find(power => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.desc) || 'not found'; //Retorna la descripción
            //del poder que coincida con el número actual del objeto Ironman
            /**
             * Si en el arreglo powers existe el número de poder que se le asigne al nuevo objeto en index.ts,
             * entonces se lee la descripción del poder. En caso que no exista, imprime 'not found'
             */
        }
    }
    exports.Hero = Hero;
    class Hero2 {
    }
    exports.Hero2 = Hero2;
    class Hero3 {
    }
    exports.Hero3 = Hero3;
    class Hero4 {
    }
    exports.Hero4 = Hero4;
    exports.PI = 3.1416;
    exports.miNombre = 'Oscar';
});
define("ts-node/src/generics/generics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericFunction = exports.printObject = void 0;
    const printObject = (argument) => {
        console.log(argument);
    };
    exports.printObject = printObject;
    function genericFunction(argument) {
        return argument;
    }
    exports.genericFunction = genericFunction;
});
define("ts-node/src/index", ["require", "exports", "ts-node/src/generics/generics"], function (require, exports, generics_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log((0, generics_2.genericFunction)(3.1416).toFixed(2));
    console.log((0, generics_2.genericFunction)(new Date()).toFixed(2));
});
/**
 *
 * Funciones genéricas son funciones que pueden recibir cualquier tipo de argumento.
 *
 */ 
define("ts-node/src/data/powers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const powers = [
        {
            id: 1,
            desc: 'Money'
        },
        {
            id: 2,
            desc: 'Drugs'
        }
    ];
    exports.default = powers;
});
define("ts-node/src/classes/Hero", ["require", "exports", "ts-node/src/data/powers"], function (require, exports, powers_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.miNombre = exports.PI = exports.Hero4 = exports.Hero3 = exports.Hero2 = exports.Hero = void 0;
    powers_2 = __importDefault(powers_2);
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            var _a;
            return ((_a = powers_2.default.find(power => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.desc) || 'not found'; //Retorna la descripción
            //del poder que coincida con el número actual del objeto Ironman
            /**
             * Si en el arreglo powers existe el número de poder que se le asigne al nuevo objeto en index.ts,
             * entonces se lee la descripción del poder. En caso que no exista, imprime 'not found'
             */
        }
    }
    exports.Hero = Hero;
    class Hero2 {
    }
    exports.Hero2 = Hero2;
    class Hero3 {
    }
    exports.Hero3 = Hero3;
    class Hero4 {
    }
    exports.Hero4 = Hero4;
    exports.PI = 3.1416;
    exports.miNombre = 'Oscar';
});
