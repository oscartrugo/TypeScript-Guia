"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    let noName;
    noName = 'Oscar';
    const name = fullName(noName); //El ? en el argumento lastName permite no introducir el segundo argumento 
    console.log({ name });
});
