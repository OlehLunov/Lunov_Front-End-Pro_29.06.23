let operation = prompt("Оберіть дію (+, -, *, /)");

let first = +prompt("Введіть перше число:");
let second = +prompt("Введіть друге число");

let result;

switch (operation) {
    case "+" : result = first + second;
    break;
    case "-": result = first - second;
    break;
    case "*": result = first*second;
    break;
    case "/": result = first/second;
    break;
    default:
        result = 'Щось пішло не так';
}

alert(`${first}  ${operation}  ${second} = ${result} `)

