let champ = prompt("Введіть улюблену лігу:");
let team = prompt("Введіть улюблену команду:");
let player = prompt("Введіть улюблену гравця:");

let result = champ + " " + team + " " + player;

alert(result);


{
    let name = prompt("Введіть cвоє ім'я:");
    let age = prompt("Введіть свій вік:");

    let result = 'Вітаю: ' + name + '!\nВаш вік: ' + age;

    alert(result);
}


{
    let name = prompt("Введіть cвоє ім'я:");
    let age = prompt("Введіть свій вік:");

    let result = `
    Вітаю ${name}!
    Ваш вік ${age}.
    `
    alert(result);
}
