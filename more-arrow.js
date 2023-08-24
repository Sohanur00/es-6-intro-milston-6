const difference = (x,y ) =>x -y;
const multiply = ( first, second , third ) => first * second * third;
// single or one paramiter
const  getAge = (person) => person.age;
const student = {name : 'ananta vai ', age :45}

const age = getAge ( student)
console.log( age );

const getThird = numbers => numbers [2];
const third = getThird([5,3,78,7565,4])
console.log(third)


const doubleit = num => num * 2;

// no paramiter

const getPI = ( ) => Math.PI
console.log(getPI())

// large arrow function . if you want  to get anything  returned from this function .then you have to use the return keyword
const doMath = (x,y,z) =>{

const sum = x + y + z;
const mult = x * y * z;
const result = sum + mult
return result;

}