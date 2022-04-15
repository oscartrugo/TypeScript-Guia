(()=>{
    interface addTwoNumbers{
        (a: number, b:number) : number;
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (a: number, b: number) => {
        return b+a;
    }
    // console.log(addNumbersFunction(5,7))

})()