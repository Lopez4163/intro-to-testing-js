// helloWorld function 
function helloWorld() {
    return "Hello, World!"
}

const sayHello = (x) => {
    if(x === true || x === false) {
        return "Hello, World!"
    }
    else{
        return `Hello, ${x}!`
    }
}
console.log(sayHello("Alex"))

// const sayHello = (x) => { return `Hello, ${x}!`}

sayHello('Jane')
sayHello('Alex')
sayHello('Pat')
sayHello('World')
// const sayHello = (input) => {
//     return "Hello," + input + "!";
//
// }
const isFive = (x) => {
    return x == 5;

}
(isFive('5'))

const isEven = (x) => {
    return x % 2 === 0
}
console.log(isEven(5))

