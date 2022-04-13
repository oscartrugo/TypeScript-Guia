(()=>{

    // const number: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    const number: number[] = [1,2,3,4,5,6,7,8,9,10];

    number.push(11)
    number.push(11)
    console.log(number)
    // number.push(true) no podemos insertar un booleano en un array de number o string 

    const villian = ['Omega rojo', 'Dormammu', 'Duende Verde']

    number.forEach( v => console.log(v))
})()