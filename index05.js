function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(0)); 
console.log(factorial(1)); 
console.log(factorial(3));
console.log(factorial(5)); 
console.log(factorial(7)); 
console.log(factorial(11)); 
console.log(factorial(13)); 
console.log(factorial(17));
console.log(factorial(19)); 
console.log(factorial(21));