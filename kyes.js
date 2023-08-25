const glass = {

    name : 'glass',
    color : 'golden',
    price : 12,
    isCleaned : true
}

console.log( glass);
const keys = Object.keys(glass)
//[ 'name', 'color', 'price', 'isCleaned' ]

const values = Object.values(glass)
//[ 'glass', 'golden', 12, true ]

console.log(values)

const phir = Object.entries(glass)
console.log(phir)
//array of array ,two dimentional array

/**  [ 'name', 'glass' ],
[ 'color', 'golden' ],
[ 'price', 12 ],
[ 'isCleaned', true ]
**/

delete glass.isCleaned;
console.log(glass);
