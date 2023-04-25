let myMap = new Map();
myMap.set('x', 'y');

//решение1
for (let myKey of myMap.keys()) {
    console.log('Ключ — ' + myKey + ', значение — ' + myMap.get(myKey));
}

//решение 2
myMap.forEach((value, key) => {
    console.log(`Ключ - ${key}, значение - ${value}`);
})
