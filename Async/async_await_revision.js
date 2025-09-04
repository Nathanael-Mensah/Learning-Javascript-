function scoreGoal(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const goalscored=true;
            if(goalscored){
                resolve("You scored a goal");
            }
            else{
                reject("You didn't get on the scoresheet");
            }
        },2000)
    })
}
function getAssist(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const assistBagged=true;
            if(assistBagged){
                resolve("You bagged an assist");
            }
            else{
                reject("You did not make an assist");
            }
        },1000)
    })
}
function cardBooked(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const booked=false;
            if(booked){
                resolve("You did not get booked");
            }
            else{
                reject("You got booked")
            }
        },9000)
    })
}
async function performance(){
    try{
        const assistResult=await scoreGoal();
        console.log(assistResult)

        const goalBagged=await getAssist();
        console.log(goalBagged);

        const cardBooked=await cardBooked();
        console.log(cardBooked);
    }
    catch(error){
        console.error(error)
    }
}
performance();

 