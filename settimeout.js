//setTimeout(callback,delay)
function sayHello(){
    window.alert("Hello")
}
setTimeout(sayHello,3000)
//3000 is 3seconds ie3000milliseconds

const timeoutId=setTimeout(()=>window.alert("Hello"),3000)
clearTimeout(timeoutId)//clearTimeout is also a function().It prevents the setTimeout from running.