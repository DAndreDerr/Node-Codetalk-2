// What is a async/await? Why is async/await useful? 
    // Async/Await is a feature that allows you to write asynchronous code in JS in a easier to read way
    // It is built on top of promises 


    // allows us to write asynchronous JS

// What are pro/cons to using async/await? 
    // pros:
        // Simplifies async code
        // Error Handling: using try and catch makes handling errors easy
        // Sequencing: async/await allows you to sequence async operations
        // Please code some examples of async/await to show to the class.

    // cons:
        // browser supports ; older browsers may not support
        // Slight performance decrease:
        // can get complicated with promises

// Make sure to go into detail as you explain your code to the class.

// ex:
// below I created a program that utilizes Promises and async/await to generate a example array with 5 random numbers (1-100)

function randomNum() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            const randomNumber = Math.floor(Math.random()* 100) 
            resolve(randomNumber)
        }, 1000);
    });
}

async function generateExampleArray(){
    let data = [];
    console.log("generating example dataset...");
    const number1 = data.push(await randomNum());
    const number2 = data.push(await randomNum());
    const number3 = data.push(await randomNum());
    const number4 = data.push(await randomNum());
    const number5 = data.push(await randomNum());
    console.log(`Example dataset generated:`, data)
}

generateExampleArray()