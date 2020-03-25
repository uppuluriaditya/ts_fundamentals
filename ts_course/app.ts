
/**callback functions */

function addAndHandle(num1: number, num2: number, cb: (num) => void){
    let result = num1 + num2;
    cb(result)
}

addAndHandle(10, 20, (data) => {
    console.log("print data", data);
});