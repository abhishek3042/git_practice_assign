let str="aba";
let bag=0;
for(let i=str.length-1;i>=0;i--){
    bag=bag+str[i]
}
if(bag=str){
    console.log("it's a palindrome")
}
else{
    console.log("it's not a palindrome")
}