"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    let noName;
    noName = 'Oscar';
    const name = fullName(noName, 'Trujillo'); //Parámetros obligatorios
    console.log({ name });
});
