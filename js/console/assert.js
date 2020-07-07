// Outputting a message only if a certain condition is met is  a common scenario.
// So, Instead of writting a regular if statement you can use console.assert().
// This message will only print if the given condition resolves to false.

let price = 150;
console.assert(price < 500, "This is expensive");

let price = 650;
console.assert(price < 500, "This is expensive");
