/** Classes */

class Animal{
    name: string;

    constructor(name:string){
        this.name = name
    }

    walk(distance: number){
        console.log("me " + this.name + " and i am walking for " + distance + " meters")
    }
}

let animal = new Animal("tiger")
animal.walk(10)
