/**Class Decorators */

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet = () => {
        return "Hello, " + this.greeting;
    }
}

let objGreet = new Greeter("OLA!!!");
console.log(objGreet.greet());
