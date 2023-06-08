// The “this” keyword works differently in arrow functions vs regularly declared functions.
// Explain how the “this” keyword works differently in arrow functions vs normal functions.

    // In normal functions the value of this is determined based on how the context of how the function is called
        // Global Context: "this" refers to the global object
        // Object Method: "this" refers to the object that holds the method
        // Event Hanglers: "this" refers to the html element that corresponds with the event
        // Function: "this" refers to the global object
        // Function(strict): "this" returns undefined

    // In arrow functions the value of "this" is determined on the surrounding scope of where the function is defined
        // Global Method: "this" refers to global object
        // Object Method: "this" refers to the Object because it is the scope surrounding the method
        // Event Handlers: "this" refers to the object of the surrounding scope
        // Function: "this" refers to the object of the surrounding scope


// Write some code that shows that you understand the difference between how the “this” keyword is used.
// Make sure to go into detail as you explain your code to the class.

// global
const x = this;

console.log(x)

// function

function examplefunction() {
    return this;
}

// Object Method

const dre = {
    fName: "D'Andre",
    lName: "Derr",

    fullName(){
        return `${this.fName} ${this.lName}`;
    }
}

console.log(dre.fullName());

// arrow function
const exArrowFunction = () =>{
    return this;
}