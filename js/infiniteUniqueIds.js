// Purpose: Generating an infinite number of unique identifiers using javascript generator.

function* generateId() {
    let i = 0;
    while (true) yield i++;
}

const ids = generateId();

ids.next().value; // Output: 0
ids.next().value; // Output: 1
ids.next().value; // Output: 2
