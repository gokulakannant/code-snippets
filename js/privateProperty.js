// Private property declaration in es6 class

class Sample {
    #property;

    constructor() {
        this.#property = "Sample Property";
        console.log(this.#property); // Output:: Sample Property
    }
}

const instance = new Sample();

console.log(instance.property); // Output:: undefined
console.log(instance.#property) // Uncaught SyntaxError: Private field '#property' must be declared in an enclosing class

