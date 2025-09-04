//for loop =repeat some code a LIMITED amount of times
for(let i=1;i<=10;i++){
    console.log(i)
}
for(let i=0; i<=2;i++){
    console.log("Hello")
}
for(let i=10;i>0;i-=1){
    console.log(i)
}
console.log("Happy New Year")

for(let i=1;i<4;i+=2){
    console.log(i)
}
for(let i=1;i<=6;i++){
    if (i==4){
        continue
    }
    else{
        console.log(i)
    }
}
for (let i=1;i<=6;i++){
    if(i==3){
        break
    }
    else{
        console.log(i)
    }
}