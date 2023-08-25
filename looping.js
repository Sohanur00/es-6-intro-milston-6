const numbers =[1,543,3,232];
// for(let i = 0; i<numbers.length; i++){


// }
for (const num of numbers){
    // console.log(num)
}
const nobaab = 'siraj Ud doula';
for ( const char of nobaab){
//console.log(char)
}

const glass = {
name : 'glass',
color : 'golden',
price : 234142,
isCleaned : true

}

for ( const key in glass ){
    const value = glass [ key];
    // console.log( key, value)
}

//optional 
const keys = Object.keys( glass);
console.log (keys)