const max = Math.max(3,345,56,454,)
const numbers = [2,354,35,5465,7,32,3,21,657,68]

const arrayMax = Math.max(...numbers);

// console.log(...numbers)

console.log(arrayMax)

// use spead oparetor to copy
const friends = [34,54,5]
const bondhu= friends;
const dosto = [...friends]

console.log(dosto)
friends.push(100)
console.log(friends)