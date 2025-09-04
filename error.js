//Error=An Object that is created to represent a problem that occurs
//      Occur often with user input or establishing a connection

//try {}=Executes code that might potentially cause an error
//catch {}=catch and handle any thrown errors from try { }
//finally { }=(optional) always executes,used mostly for clean up
//            ex. close files,close connections,release resources

try{
    console.log(x);
    //NETWORK ERRORS
    //PROMISE REJECTIONS
    //SECURITY ERRORS
}
catch(error){
   console.error(error)//console.rror(error) is better when dealing with errors than console.log(error)
}
finally{
    //CLOSE FILES
    //CLOSE CONNECTIONS
    //RELEASE RESOURCES
    console.log("This always executes")
}

console.log("You have reached the end!")

//EXAMPLE 2
try{
    const dividend=window.prompt("Enter a dividend: ");
    const divisor=window.prompt("Enter a divisor: ");

    if(divisor==0){
        throw new Error("You can't divide by zero");
    }
    if(isNaN(divisor) || isNaN(dividend)){
        throw new Error("Values must be a number")

    }

    const result=dividend/divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have finally reached the end");