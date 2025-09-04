//Async/Await  =  Async=makes a function return a promise
//Await=makes an async function wait for a promise

//Allows you to write Asynchronous code in synchronous manner
//Async doesnt have resolve or reject parameters
//Everything after Await is placed in an event queue
function attendFootballpractise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const footballPractiseAttended=true;

            if(footballPractiseAttended){
                resolve("You attended football practise");
            }
            else{
                reject("You DIDN'T ATTEND FOOTBALL PRACTISE");
            };

        },3500)
    })

}

function classAttended(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const attendedClass=true;
            if(attendedClass){
                resolve("You attended class");
            }
            else{
                reject("You didnt attend class");
            };

        },3000)
    })
}

function boughtSneakers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const sneakersBought=false;

            if(sneakersBought){
                resolve("You bought new Sneakers")
            }
            else{
                reject("You didn't buy new sneakers")
            };
            
        },4000)
    })
}

async function doTask(){
    const footballPractiseResult=await attendFootballpractise();
    console.log(footballPractiseResult);
    
    const classAttendedResult=await classAttended();
    console.log(classAttendedResult);

    const boughtSneakersResult=await boughtSneakers();
    console.log(boughtSneakersResult)

    console.log("You finished all the tasks")
}
doTask()
