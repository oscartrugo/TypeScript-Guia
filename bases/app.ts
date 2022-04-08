
const msg: string = 'Hola mundo' //Constante 'msg' de tipo String 

const heroe = {
    name: 'Ironman',
    age: 45
}

heroe.age = 50

console.log(heroe.age + 1)

//ejecutamos en consola "tsc app" para traducir el código de TS a JS
//Con el comando tsc --init creamos el archivo tsconfig.json