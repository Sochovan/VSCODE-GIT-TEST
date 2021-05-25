/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

function sum(from, to, printer) {
    console.log(from);
    console.log(to);
    console.log(printer);
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    printer(sum);
}

function printResult(res) {
    console.log('Result is here: ' + res);
}

//test

сonst a = 3;
const b = 9;
const
    sum(3, 9, printResult);