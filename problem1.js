let num=13;
let prime=true;

for(let i=2;i<num;i++){
    if(num%i==0){
        prime=false;
    }

}
if(prime){
    console.log("it is prime")
}else{
    console.log("it is not prime")
}