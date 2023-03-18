const array = [1, 2, 3, 4, 5]

// Checks whether an element is even
const even = (element) => element % 2 === 0

const odd = (element) => element % 2 !== 0

console.log(array.some(even))
console.log(array.some(odd))
