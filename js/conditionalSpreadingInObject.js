// Conditional Spreading in Object

const lastName = "bar";

const person = {
    firstName: "foo",
    ...(lastName && { lastName }),
    age: 10
}

// person = { firstName: "foo", lastName: "bar", age: 10 }
