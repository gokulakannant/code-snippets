// Purpose: The ResizeObserver interface reports changes to the diamensions of an element's content.
// Pros: ResizeObserver avoids infinite callback loops and cyclic dependencies
//       that are often created when resizing via a callback function.

const myObserver = new ResizeObserver(entries => {
    console.log(entries);
});

const body = document.querySelector("body");
myObserver.observe(body);
