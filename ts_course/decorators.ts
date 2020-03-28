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

/** Override constructor */
function classDecorator<T extends {new (...args: any[]): {}}>(constructor: T){
    return class extends constructor{
        newProperty = "New Property";
        hello = "override";
    }
}

@classDecorator
class  Greeter_2{
    property = "property";
    hello: string;
    constructor(m:string){
        this.hello = m;
    }
}

console.log(new Greeter_2("world!!"));