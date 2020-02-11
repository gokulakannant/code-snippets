// Author: Gokulakannan T
// Purpose: Copy an object except a particular property.

const object = {
    id: 100,
    name: "Sample",
    children: {}
}

const removeProperty = prop => (({ [prop]: _, ...rest }) => ({ ...rest }))(object);

console.log(removeProperty("id"));
// Output: { name: "Sample", children: }

console.log(object);
// Output: { id: 100, name: "Sample", children: {} }
