// function abcd(n){
//     if(n === 0)return
//     console.log(n);
//     abcd(n-1)
    
// }
// abcd(5)// recursion function


// console.log("hlo");

//code ko reuse karne me help karta hai function
//function code jab hum chayenge tab chalega 
// mixParatha(26, "dachu")
// function mixParatha(age, name){
//       console.log(`Name: ${name}, Age: ${age}`);
// }
// mixParatha(22,"ismail")
// mixParatha(23, "azeem")
// mixParatha(25, "manju")


// https://randomusr.me/api/
//destructred >
// function abcd({age, name}){
//     console.log({age, name});
    
// }
// abcd({age:25, name: "manju"})


//rest> 
// function abcd(...val){
//     console.log(val);
    
// }
// abcd(1,2,3,4,5)

//default >
//  function abcd(a = 0, b = 0, c =0){
//    console.log(a, b, c);
    
// }
//  abcd(1,2)

//positional arguments
//  function abcd(a , b , c){
//    console.log(a, b, c);
    
// }
//  abcd(1,2,3)


//spread argumnet
//  function abcd(a , b , c){
//    console.log(a, b, c);
    
// }
//  let arr = [1, 2, 3, 4]
//  abcd(...arr)

//anonymou - benami(name less)

// function(){

// }

//high-order-function

//  function abcd(){  //high order functio   
//   return function(){

//   }
// }

//pure functions 

// let a = 12;
// function abcd(val){
//  console.log(Math.random() + val);

 
// }
// abcd(2)
// abcd(2)
// abcd(2)

//closure
//ek fuynction hai jo return karta function 
// function abcd(){
// let a = 12;
// return function(){
//   console.log(a);
// }
// }

 let arrr = [1,2,3,4,5,6,7]
 for(let i = 0; i < arrr.length; i++){
    console.log(i);
    
 }