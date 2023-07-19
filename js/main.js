let length = prompt("Введіть довжину массиву:");

let arr = [];

for (let i = 0; i < length; i++) {
    let element = prompt("Введіть елемент масиву " + (i + 1) + ":");
    arr.push(element);
}
alert("Введений вами массив: " + arr.join(", ") + "!");

arr.sort();
alert("Відсортований массив: " + arr.join(", ") + "!");

arr.splice(1,3);
alert("Скорегований массив: " + arr.join(", ") + "!");





