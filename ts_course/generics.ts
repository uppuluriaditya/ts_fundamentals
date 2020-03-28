const last = (arr: Array<number>) => {
    return arr[arr.length - 1];
}

console.log(last([1, 2, 3, 4, 5]));

function identity<T>(arg: T): T {
    return arg;
}

let first_way_string = identity<string>("Aditya");
console.log(first_way_string);

let second_way_string = identity("Aditya-2");
console.log(second_way_string);

function lastValue<T>(arg: T[]) {
    return arg[arg.length - 1]
}

let num = [1, 2, 3, 4, 5]
let str = ["Aditya", "Mani", "Shrikant"]

console.log(lastValue(num))
console.log(lastValue(str))

/** Extending Generics */

//simple way with only specified properties
const makeFullName = (obj: { firstName: string; lastName: string }) => {
    return {
        ...obj,
        fullname: obj.firstName + ' ' + obj.lastName
    }
}

console.log(makeFullName({ firstName: "Aditya", lastName: "Uppuluri" }))

// Generic with constraints
const makeFullNameC = <T extends { firstName: string; lastName: string }>(obj: T): T => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    };
}

console.log(makeFullNameC({ firstName: "Aditya", lastName: "Uppuluri", age: 30 }));

/** interfaces */
interface Tab<T>{
    id: string,
    position : number,
    data : T
};

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
