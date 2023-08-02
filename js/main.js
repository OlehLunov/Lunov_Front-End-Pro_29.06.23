let length = +prompt("Введіть кількість елементів ключа:");
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(length, characters);

function generateKey (length, characters) {

    const charactersArray = characters.split('');
    let key = "";
    for ( let i = 0; i < length; i++){
        const randomElement = Math.floor(Math.random() * charactersArray.length);
        key += charactersArray[randomElement];
    }
    return key;
}
alert(`Ваш сгенерований код: ${key} !`);

