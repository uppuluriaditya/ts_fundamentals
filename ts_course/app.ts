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

// let animal = new Animal("tiger")
// animal.walk(10)

/** Inheritence */
class Snake extends Animal{
    /**
     *
     */
    constructor(name: string) {
        super(name);

    }

    walk(distance: number){
        console.log("Snakes really don't walk")
    }

    hiss(numOfTimes: number){
        let finalHiss:string = ""
        for(let i=0; i<numOfTimes; i++){
            finalHiss += " hisssssss!!!!"
        }
        console.log(finalHiss)
    }
}

let rattle = new Snake("Rattle Snake");
rattle.hiss(10)
rattle.walk(10)