(()=>{
        //Sólo pedimos uno, los demás son dinámicos
    const fullName = (firstName: string, ...restoDeNombres: string[]): string =>{
        return `${firstName} ${restoDeNombres.join('')}` //Unimos el primer parámetro con todas las demás
    }
    const superman = fullName ('Clark', 'Joseph', 'Kent')

    console.log({superman})
})()