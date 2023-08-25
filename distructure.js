const actor = {

    name : 'sohan',
    age : 30 ,
    phone : '017986796',
    taka : '0987097'

}
// const phone = actor.phone;
// const name = actor.age ;
// const age = actor.age ;
const {phone,age,taka} = actor

console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(age)
console.log(age)
console.log(age)
console.log(taka)
console.log(taka)

//array destructuring

const numbers = [34,45]
const [first,second] = numbers;
const [x,y] = [34,234];

// advenced

function doubleThem ( a, b ) {
    return [a*2 , b*2 ]
}

const [fast , last] = doubleThem (6,9)
console.log(fast, last)