const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumPos = 0;
let countPos = 0;

for (i =0; i < arr.length; i ++){
    if(arr[i] >0) {
        sumPos += arr[i];
        countPos++;
    }
}
console.log(`Сума позитивних елементів: ${sumPos}`);
console.log(`Кількість позитивних елементів: ${countPos}`);