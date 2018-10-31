/**
 * Created by Christian on 06-02-2018.
 */
console.log("de 10 første fibonaccital er ");

let fibPrev = 0;
let fib = 1;
let nextFib=1;

//TODO Make a loop!

for (let i=1; i<11;i++){
    nextFib = fibPrev + fib; // 0 + 1
    fibPrev = fib; // 1
    fib = nextFib; // 1
    console.log("Fibonacci #"+i+" "+fib);

}


