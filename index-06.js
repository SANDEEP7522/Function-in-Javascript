function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

function addThreeNumbers(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(addThreeNumbers);


console.log(curriedAdd(1)(2)(3)); 

console.log(curriedAdd(1, 2)(3)); 
console.log(curriedAdd(1)(2, 3)); 

console.log(addThreeNumbers(1, 2, 3)); 
