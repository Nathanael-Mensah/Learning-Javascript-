//synchronous=executes line by line consecutively in a sequential manner
//            code that waits for a function to complete.

//asynchronous=Allows multiple operations to be performed concurrently without waiting
//            Doesn't block the execution flow and allows the program to continue
//            (I/O operations,network requests,fetching data)
//             handled with:Callbacks,Promises,Async/Await

//Asynchronous code
function func1(callback){
    setTimeout(()=>{console.log("Task 1");
                    callback()},3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2);
//if asynchronous code doesn't wait for one and allows the program to run concurrently,then why didnt it print the 
//task 1 after performing function 2 because task 1 takes 3000milliseconds,ie 3seconds so it takes longer to run
//but rather it waited 3seconds before printing both task 1 and task 2

//Synchronous code
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
