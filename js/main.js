const mainArray = [6, 2, 'hello', 7, 'world', 2, 5];
const result = numbersAverage(mainArray);

function numbersAverage (array) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++){
        const element = array[i];

        if (typeof element === 'number'){
            sum += element;
            count++;
        }
    }
    return (sum/count);
}
console.log (result);





const x = +prompt('Введіть перше число:');
const znak = prompt('Введіть знак (+, -, *, /, %, ^):');
const y = +prompt('Введіть друге число:');
const mathResult = doMath(x, znak, y);

function doMath(x, znak, y) {
    if (znak === '+'){
        return x + y;
    } else if ( znak === '-'){
        return x-y;
    } else if (znak === '*'){
        return x * y;
    } else if (znak === '/'){
        return x / y;
    } else if (znak === '%'){
        return x % y;
    } else if (znak === '^'){
        return x ** y;
    } else{
        return "Помилка";
    }
}
alert(`Резултат вашого виразу: ${mathResult}`);





let  mainArrayLength = +prompt('Введіть довжину основного масиву:');
let  secondaryArrayLength = +prompt('Введіть довжину внутрішнього масиву:');
const arrResult = twoArr;

function twoArr() {

    const mainArr = [];

    for (let i = 0; i < mainArrayLength; i++){
        const secondaryArray =[];
        for (let k = 0; k < secondaryArrayLength; k++){
            const element = +prompt(`Введіть елементи внутрішніх массивів:`);
            secondaryArray.push(element);
        }
        mainArr.push(secondaryArray);
    }
    return mainArr;
}

console.log(arrResult());



const newString = prompt('Введіть рядок:');
const deleteLetter = prompt('Введіть символи, які потрібно видалити:');
const deleteResult = removeLetters(newString,deleteLetter);
function removeLetters(newString,deleteLetter) {
    for (let i = 0; i < deleteLetter.length; i++){
        const element = deleteLetter[i];
        newString = newString.split(element).join('');
    }
    return newString;
}
alert(deleteResult);