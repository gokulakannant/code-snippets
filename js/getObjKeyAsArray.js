// Get particular key from array of objects without Array.map or for loop

const users = [
    { name: "foo", age: 20 },
    { name: "bar", age: 22 }
]

const userNames = Array.from(users, ({ name }) => name);

console.log(userNames); // ["foo", "bar"]
