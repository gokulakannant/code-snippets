// Caching the array.length in loop

let array = new Array(100);

for (let index = 0; index < array.length; index++) {
    // This loop will calculate the array length each time
}

for (let index = 0; length = array.length; index++) {
    // This loop will calculate the array length only once
}
