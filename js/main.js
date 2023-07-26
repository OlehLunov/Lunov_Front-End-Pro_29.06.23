let step = "";

for (let i = 20; i <= 30; i += 0.5) {
    step += i.toFixed(1) + ", ";
}
console.log(step.slice(0,-2));

/*-------dollar---------*/

const course = 27;

for (let i = 10; i <= 100; i += 10){
    let hryvnia = i * course;
    console.log(`${i} долларів дорівнює ${hryvnia} гривень`);
}

/*-------цілі числа-------*/

let num = +prompt("Введіть ціле число:");

for (let i = 1; i <= 100; i++) {
    let square = i**2;
    if (square <= num) {
        console.log(i);
    } else {
        break;
    }
}
/*-------Просте число-----*/

let inputNum = +prompt("Введіть число:");
let primeNum = true;

if (inputNum <= 1){
    primeNum = false;
} else {
    for (let i = 2; i ** 2 <= inputNum; i++) {
        if (inputNum % i === 0) {
            primeNum = false;
            break;
        }
    }
}
if (primeNum) {
    console.log("Просте.");
} else {
    console.log("Не  просте.");
}

/*---------------------------------------*/

let raising = +prompt("Ввести число:");
let saveRaising = raising;

while (raising > 1 && raising % 3 === 0) {
    raising /= 3;
}
if (raising === 1) {
    console.log(`${saveRaising} - можна`);
} else {
    console.log(`${saveRaising} - не можна`);
}






