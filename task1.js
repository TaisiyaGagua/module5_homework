let input = prompt("Введите свое число", "");
if (input === "") {
    alert("Упс, кажется, вы ошиблись");
}
else {
    let finalNumber = +input;
    if (isNaN(finalNumber)) {
        alert("Упс, кажется, вы ошиблись");
    }
    else if (typeof (finalNumber) === 'number') {
        let modulo = finalNumber % 2;
        alert(modulo == 0 ?
            'ваше число четное' :
            'ваше число нечетное')
    }
    else {
        alert("Упс, кажется, вы ошиблись");
    }
};