let numbers = '';

for (let i = 10; i <=20; i++){
    numbers += i + ', ';
}
console.log(numbers.slice(0,-2));
/*-------------------Квадрати--------------------------*/

let square = "";

for (let i = 10; i <= 20; i++){
    square += (i**2) + ', ';
}
console.log(square.slice(0,-2));

/*let square = [];

for (let i = 10; i <= 20; i++) {
  square.push(i ** 2);
}
console.log(square);*/

/*--------------------таблиця множення на 7------------------------------*/


for( let i = 1; i <=10; i++){
    let table = 7 * i;
    console.log(`7 * ${i} = ${table}`);
}

/*--------------------сумма цілих--------------------------*/

let sum = 0;

for( let i = 1; i <= 15; i++){
    sum += i;
}
console.log(sum);

/*---------------добуток цілих----------------------*/

let prod = 1;

for( let i = 15; i <= 35; i++){
    prod *= i;
}
console.log(prod);

/*-------арефметичне------------------------*/
let sumAverage = 0;
let num = 500;
for (let i = 0; i <= num; i++){
    sumAverage += i;
}
let average = sumAverage/num;
console.log (average);

/*------сумма парних________________*/

let couples = 0;
for ( let i = 30; i <= 80; i += 2){
    couples += i;
}
console.log (couples);

/*--------- кратні 3 ----------*/

let multiplicity = "";

for (let i = 100; i <= 200; i++){
    if (i % 3 === 0) {
        multiplicity += i + ", ";
    }
}
console.log(multiplicity.slice(0,-2));

/*------ натуральне число - парнні -------*/

let giveNum = 36;
let dividers = "";
let evenDividers = 0;
let dividersSum = 0;

for (let i = 1; i <= giveNum; i++) {
    if (giveNum % i === 0) {
        dividers += i + ', ';
        if (i % 2 === 0){
            evenDividers++
            if (giveNum % i === 0 && i % 2 === 0) {
                dividersSum += i;
            }
        }
    }
}
console.log("Дільники заданного числа: " + dividers.slice(0,-2) + ";");
console.log(`Кількість парних дільників: ${evenDividers};`);
console.log(`Cумма парних дільників: ${dividersSum};`);

/*------- таблиця множення----------*/

for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        let  fullTable = i * j;
        console.log(`${i} * ${j} = ${fullTable}`);
    }
}






















