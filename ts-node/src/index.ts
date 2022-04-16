//import { Hero as SuperHero } from './classes/Hero';
import * as HeroClasses from './classes/Hero'; //Exportación con alias
import powers2, {Power} from './data/powers'; //Importamos por defecto

const Hero = 123;

// const ironman = new SuperHero('Ironman', 500, 45);
const ironman = new HeroClasses.Hero('Ironman', 500, 45);

console.log(ironman)
console.log(powers2)







