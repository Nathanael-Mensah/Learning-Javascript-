//callback=a function that is passed as an argument to another function
//used to handle asynchronous operation;
// 1.Reading a file;
// 2.Network requests;
// 3.Interacting with databases

function hello(callback){
    console.log("Hello");
    callback();
}
function goodbye(){
    console.log("Goodbye");
}
hello(goodbye);//this will console hello and goodbye
//we need not add a "()" after the goodbye in hello(goodbye).We shouldnt do this else it will call the
//goodbye function right away
//NOTE:Because we have passed a parameter hello ie(goodbye)we'd need matching set of parameters in the function.
//ie callback