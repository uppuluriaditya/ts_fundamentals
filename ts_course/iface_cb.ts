
/**callback functions */

function addAndHandle(num1: number, num2: number, cb: (num: number) => void){
    let result = num1 + num2;
    cb(result)
}

addAndHandle(10, 20, (data) => {
    console.log("print data", data);
});

/** Interfaces */
interface RectangleOptions {
    width: number;
    length: number;
};

function drawRectangle(options: RectangleOptions){
    let width = options.width
    let length = options.length
    console.log("Got coordinates: ", width, length)
}

drawRectangle({
    width: 100,
    length: 20
});
