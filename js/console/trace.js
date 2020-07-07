// This method helps you find the whole call stack of a function.
// console.trace() is especially useful when dealing with a lot of callbacks.


function foo(num) {
    bar(num + 1);
}

function bar(num) {
    console.trace("Trace:", num);
}
