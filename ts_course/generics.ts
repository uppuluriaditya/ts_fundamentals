const last = (arr: Array<number>) => {
    return arr[arr.length - 1];
}

console.log(last([1, 2, 3, 4, 5]));

function identity<T>(arg: T) : T{
    return arg;
}

let first_way_string = identity<string>("Aditya");
console.log(first_way_string);

let second_way_string = identity("Aditya-2");
console.log(second_way_string);