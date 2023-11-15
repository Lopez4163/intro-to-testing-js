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

const isFive = (x) => {
    return x === 5;

}

