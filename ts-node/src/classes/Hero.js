var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../data/powers"], function (require, exports, powers_1) {
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
