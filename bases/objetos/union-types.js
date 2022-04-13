"use strict";
(() => {
    let myCustomVariable = 'Son Goku';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Son Gohan',
        age: 18,
        powers: [50000000],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
//# sourceMappingURL=union-types.js.map