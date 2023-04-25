let array = [];

function checkElements(array) {
    if (array.length === 0) {
        console.log('массив пустой');
        return;
    }
    else if (array.length === 1) {
        console.log(true)
        return;
    }

    let firstElement = array[0];

    for (let i = 1; i < array.length; i++) {
        if (firstElement !== array[i]) {
            console.log(false);
            return;
        }
    }
    console.log(true)
}
checkElements(array);

