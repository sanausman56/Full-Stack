 //Even Numbers
 const numberArray = [1,2,4,6,7,8,9];
 var Evennumber=[];
for(let i=0; i< numberArray.length; i++){
  
  if(numberArray[i]%2===0){
  Evennumber.push(numberArray[i]);
  }
}
alert(Evennumber);
//primeNumber
let number=5;
primeNumber(5);
function primeNumber(number){
 //let number= document.querySelector("#prime");
 //alert(number);
if(number<0){
  alert("Enter Positive Number")
 }
 else if(number===0 || number===1){
 alert("0 and 1 are not prime numbers")
 }
 else if(number>1){
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
   console.log(`${number} is a prime number`);
} else {
  console.log(`${number} is a not prime number`);
}
 }
}