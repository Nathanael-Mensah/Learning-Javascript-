//Promise=An Object that manages asynchronous code operations.Wrap a Promise Object around (asynchronous code)
//"I promise to return a value".
//PENDING -> RESOLVED OR REJECTED
//new Promise((resolve,reject) => {asynchronous code})

//DO THESE CHORES IN ORDER
//1.WALK THE DOG
//2.CLEAN THE KITCHEN
//3.TAKE OUT THE TRASH

function walkDog(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("You walked the dog");
    },1500);
    })
};

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("You cleaned the kitchen");
    },2200);
    })
};
function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("You took out the trash");
    },500)
    })
};

walkDog().then(value =>{console.log(value); return cleanKitchen()})
.then(value=>{console.log(value);return takeOutTrash()})
.then(value =>{console.log(value);console.log("You finished all the chores")})

//PROMISES PERFORMS TASKS WITH THE LEAST TIME FIRST
