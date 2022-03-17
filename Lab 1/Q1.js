
let printHello = function() {
    console.log("Hello World");
}

printHello();

/////////////////////////

let printHello2 = function() {
    console.log("Hello world");
}

function printGiven(givenFunction) {
    givenFunction();
}

printGiven(printHello2);