// This method logs the total count of the number of times it was executed
// (Might be useful if you are a React dev, to keep track of how many times a component is rendered!.)


console.count("Counter");
// Counter: 1

console.count("Counter");
// Counter: 2

console.countReset("Counter"); // Reset the counter


console.count("Counter");
// Counter: 1
