/*
let userInput = +prompt(`Введіть аргумент: `);
const lockingResult = locking(userInput);

function locking (){
    let start = +prompt(`Введіть параметр: `);
    return function (b){
        userInput += start;
        return userInput;
    }
}
alert(lockingResult);*/

const userInput = +prompt(`Введіть аргумент: `);
const lockingResult = locking();

function locking() {
    let start = +prompt(`Введіть параметр: `);

    return function(b) {
        return b + start;
    };
}
console.log(lockingResult(userInput));