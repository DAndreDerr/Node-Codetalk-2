// What is a promise?
//      A promise is an object that represents the eventual completion or failure of an 
//      asynchronous operation and its value.

// What are promises used for?
//      Promises are used to handle asynchronous operations, this could be used when pulling data from a database/api/json, reading files, etc.
//      Promises are a cleaner and more structured alternative to using callback functions

// What are pro/cons to using a promise?
//      Some pros:
//          Avoiding callback hell
//          Improved readability
//          Chaining (promises can be easily chained together)
//      Some cons:
//          Not supported natively with older browsers 
//          Dealing with erors can be challenging when working with a promise chain
//          promise hell (when  promises are nested od and not properly maintained)


// Please code some examples of promises to show to the class.
// Make sure to go into detail as you explain your code to the class.

// here we create a promise that will resolve after 5 seconds
const exPromise =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("problem solved promise resolved!")
    }, 5000);
});
// once the promise resolves we use the then method with the result
exPromise.then((result)=>{
    console.log(result)
});

// here we create a new promise to double our input (must be number)
const doubleIt = (number) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof number === `number`){
                resolve(number * 2);
            } else {
                reject(new Error(`Input is not a number!`))
            }
        }, 3000);
    });
}
// here we chain promises to double our number 3 times
doubleIt(1)
    .then((result)=>{
        console.log(result);
        return doubleIt(result);
    })
    .then((result)=>{
        console.log(result);
        return doubleIt(result)
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{ //we use catch to catch any errors
        console.log(`error :: ${error}`)
    })


// here we use the double it promise but our input is a string not number
// this will result in an error
// this error is caught using the catch() method
// the error is then logged to the console
    doubleIt("bruh")
    .then((result)=>{
        console.log(result);
        return doubleIt(result);
    })
    .then((result)=>{
        console.log(result);
        return doubleIt(result)
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{ //we use catch to catch any errors
        console.log(`error :: ${error}`)
    })