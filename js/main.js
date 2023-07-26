let length = prompt("Введіть довжину массиву:");

let arr = [];

for (let i = 0; i < length; i++) {
    let element = prompt("Введіть елемент масиву " + (i + 1) + ":");
    arr.push(element);
}
alert("Введений вами массив: " + arr.join(", ") + "!");

let choseElement = prompt("Введіть елемент массиву який хочете видалити:");

function removeElement(array, item) {
    const index = array.indexOf(item);
        array.splice(index, 1);
}
removeElement(arr, choseElement);

alert("Змінений масив після видалення елемента: " + arr.join(", ") + "!");
