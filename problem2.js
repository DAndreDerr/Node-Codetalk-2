// What is a callback?
//      A callback is a function that is passed as an arguement to another function
//      This callback function executes later when it is "called back" by the receiving function
//      callback allow us to create asynchronous JS programs

// What is callback hell?
//      callback hell is the term used to describe when many nested callbacks are used
//      this can make the code hard to read and work with

// Why does callback hell occur and why should we avoid callback hell?
//      callback hell usually occurs when working with multiple async operations that depend on one another

// Please code an example of callback hell to show to the class.
// Make sure to go into detail as you explain your code to the class.

let asyncJavascriptOperation = function(err, callback){
    if(err){
        console.log(`An error has occurred:: ${err}`)
    }else {
        callback(function(err, callback){
            if(err){
                console.log(`An error has occurred:: ${err}`)
            }else {
                callback(function(err, callback){
                    if(err){
                        console.log(`An error has occurred:: ${err}`)
                    }else {
                        callback(function(err, callback){
                            if(err){
                                console.log(`An error has occurred:: ${err}`)
                            }else {
                                callback(function(err, callback){
                                    if(err){
                                        console.log(`An error has occurred:: ${err}`)
                                    }else {
                                        console.log(`Callback Hell es no bueno`)
                                    };
                                })
                            };
                        })
                    };
                })
            };
        })
    };
};