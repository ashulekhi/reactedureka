function *demo(){
    console.log("1111111111111111")
    yield 10
    console.log(">>>>>>>>>>")
    console.log("22222222222")
    yield 20
    console.log(">>>>>>>>>>>> 33333333333333333")
    yield 30
    return 40
}


// demo is a generator function what is a genertor function 

// is the one which can stop the execution and resume the executin and return multiple values

// yeild is the keyword which is used to pause execution

var demogenrator = demo()
var iterator = demogenrator.next()
do{
    console.log("value is " , iterator.value)
   iterator = demogenrator.next()
}
while(!iterator.done)




// Execution flow of above code 

// until next() is called function executes upto the yield state 

// yield is kyword of javascript to pause and resume the execution from that line on next call


// saga says create a generator function and pass it to me 
