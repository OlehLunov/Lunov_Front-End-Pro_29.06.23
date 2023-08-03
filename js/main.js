const lockingResult = locking();

function locking() {
    let sum = 0;

    return function(param) {
        sum += param;
        return sum;
    }
}
console.log(lockingResult(3));
console.log(lockingResult(5));
console.log(lockingResult(20));
console.log(lockingResult(30));