//if we work with reject too then example,
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

attendFootballpractise().then(value=>{console.log(value); return classAttended()})
.then(value=>{console.log(value);return boughtSneakers()}).then(value=>{console.log(value);console.log("DONE!")})

//PROMISES PERFORMS TASKS WITH THE LEAST TIME FIRST
