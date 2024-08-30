function heavyProduct (x,y) {
    for (let index = 0; index < 1000000000; index++) {}
        const result = x * y;
        return result        
}

function customMemoize (fn, context,) {
    const result = {}
    return function (...args){
    const cache = JSON.stringify(args);
    if(!result[cache]) {
        result[cache] = fn.call(context || this , ...args)
    }
    return result[cache]
}
}

const memoizedHeavyProduct = customMemoize(heavyProduct)

console.log(memoizedHeavyProduct(1999,2038))
console.log("loading") // delay between two function calls
console.log(memoizedHeavyProduct(1999,2038))

