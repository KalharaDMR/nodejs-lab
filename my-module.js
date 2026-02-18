// This is our custom module
function myFunction() {
    return "Hello from my custom module!";
}

function add(a, b) {
    return a + b;
}

// Export functions to make them available to other files
module.exports = {
    myFunction: myFunction,
    add: add,
    name: "My Custom Module"
};