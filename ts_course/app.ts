function add(n1: number, n2: number, printResult: boolean, phrase: string){
    const result = n1 + n2;
    if(printResult){
        console.log(phrase + result);
    }
    return result;
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const phrase = "Result is ";

add(num1, num2, printResult, phrase);

/** object type declaration */
const person:{
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; /** tuple. Always a fixed length */
}  = {
    name: 'Aditya',
    age: 29,
    hobbies: ['Reading', 'Watching Movies'],
    role: [2, 'developer']
};

/**Array type declaration */
let stringArray : string[];
stringArray = ['string1', 'string2']

let anyArray : any[];
anyArray = ['string', 1, true]

console.log(person.name)

/** Iterating through an array */
console.log("Iterating through hobbies")
for(const hobby of person.hobbies){
    console.log(hobby)
}

/**printing tuple */
console.log(person.role);

console.log("PUSH");

person.role.push('programmer');

console.log(person.role)
