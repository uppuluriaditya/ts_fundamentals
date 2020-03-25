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
const person  = {
    name: 'Aditya',
    age: 29
};

console.log(person.name)