const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumPos = 0;
let countPos = 0;

let minElem = arr[0];
let minElemNum = 0;

let maxElem = arr[0];
let maxElemNum = 0;

let posElem = 0;

let notEvenPos = 0;

let evenPos =0;

for (let i =0; i < arr.length; i++){
    if(arr[i] >0) {
        sumPos += arr[i];
        countPos++;
    }
    if (arr[i] < minElem){
        minElem = arr[i];
        minElemNum = i;
    }
    if (arr[i] > maxElem){
        maxElem = arr[i];
        maxElemNum = i;
    }
    if (arr[i] < 0){
        posElem++;
    }

    if (arr[i] > 0 && arr[i] % 2 !== 0){
        notEvenPos++;
    }

    if (arr[i] > 0 && arr[i] % 2 === 0){
        evenPos++;
    }

}

console.log(`Сума позитивних елементів: ${sumPos}`);
console.log(`Кількість позитивних елементів: ${countPos}`);

console.log(`Мінімальний елемент: ${minElem}`);
console.log(`Номер мінімального елемнту: ${minElemNum}`);

console.log(`Максимальний елемент: ${maxElem}`);
console.log(`Номер максимального елемнту: ${maxElemNum}`);

console.log(`Кількість негативних елементів: ${posElem}`);

console.log(`Кількість не парних позитивних елементів: ${notEvenPos}`);

console.log(`Кількість парних позитивних елементів: ${evenPos}`);