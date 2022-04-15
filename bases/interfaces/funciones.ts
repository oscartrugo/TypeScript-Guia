(()=>{
    interface addTwoNumbers{
        (a: number, b:number) : number;
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (b: number, c: number) => {
        return b+c;
    }
    console.log(addNumbersFunction(5,7))

})()