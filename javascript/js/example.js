 //Even Numbers
 const numberArray = [1,2,4,6,7,8,9];
  let evenNumber=0;

for(let i=0; i< numberArray.length; i++){
  
  if(numberArray[i]%2===0){
    evenNumber+=1;
    
  }
}
alert(evenNumber);


//primeNumber

function primeNumber(){
 let number= document.getElementById("prime").value
 if(number<0){
  alert("Enter Positive Number")
 }
 else if(number==0 || number==1){
 alert("0 and 1 are not prime numbers")
 }
 else if(number>1){
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        isPrime = false;
        break;
    }
    else {
      isPrime = true;
    }
}

if (isPrime==true) {
   alert(`${number} is a prime number`);
} else {
  alert(`${number} is a not prime number`);
}
 }
}