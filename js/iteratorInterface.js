// Purpose: If you want to process the elements in a collection one at a time, you can use this.

const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

iterator.next(); // -> {value: 10, done: false}
iterator.next(); // -> {value: 20, done: false}
iterator.next(); // -> {value: 30, done: false}
iterator.next(); // -> {value: undefined, done: true}
