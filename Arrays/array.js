// let arr = [1,2,3,4,5,6];
// let [a, ,b] = arr;//array destructure
// console.log(arr[5]);
// let pushe = arr.push(7)
// let pope = arr.pop(1)


// //array destructering


// //


//for loop
// let arr = [1,2,3,4];

// arr.forEach(function(val){
//     console.log(val);
    
// })

//objects
// let obj ={
//     name : "ismail",
//     age :27,
//     email : "harsh@gmail.com"
// }
// delete obj.age


function sayHello(){
    console.log("hello");
    
}
sayHello()

function add(a, b){
    return a+b;
}
add();

function greeting(guest){
    console.log(`hi${guest}`);
    
}
greeting();


function addunlimited(...nums){
    //  console.log(nums);
    nums.forEach(function(val){
        console.log(val);
        
    })
     
}
addunlimited(1,2,3,4,5,6)


(function (){

})();

 function parent(){
    let a =12;
    function child(){
        console.log(a);
        
    }
    child();
 }
 parent();

 let arr =["aple"]
 arr.push("pear")
 arr.pop("aple")

 let arrr = [1,2,3,4,5,6,7]
 for(let i = 0; i < arrr.length; i++){
    console.log(i);
    
 }

 let obj ={
    name : "ismail",
    age:22
 }
 
//  for(variable in Object-name)

for(let key in obj )
    console.log(key);



setTimeout(function(){
    console.log("time up");
    
},2000)
    