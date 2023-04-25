let str = prompt('Введите ваше сообщение', '');

function reverseString(str) {
    let newString = "";
    for (let numberOfSymbols = str.length - 1; numberOfSymbols >= 0; numberOfSymbols--) {
        newString += str[numberOfSymbols];
    }
    return newString;
}
const result = reverseString(str);
console.log(result);
