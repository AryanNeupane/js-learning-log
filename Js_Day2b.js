//  <<<<<<LOOPS>>>>>>


 for(let a =1;a<=10;a++){
    console.log(a)
 }

 let x=100
 let sum=0;
 for(let n=1;n<=x;n++){
    sum+=n
 }
 console.log(sum)

 

//  ------------------------------------------------

let obj={
    Ram:36,
    Hari:44,
    Prashuram:76,
    Hemant:46,
    Kumari:63
}

for(i in obj){
    console.log("The marks of "+i + " is "+obj[i])
}

// for iterable objects.....
for(c of "Aryan"){
    console.log(c)
}

//-----------------------------------------------------
//  <<<<< WHILE  || DO WHILE >>>>>>>>>>

// let v=0
// while(v<=10){
//     console.log(v)
//     v++
// }
//  ------------------------------------------------

// let u=1
// do{
// console.log(u)
// u++
// }while(u<=10)
//-----------------------------------------------------

function add(a,b){
    console.log(a+b)
}
add(2,5)

function pro(a,b){
    return a*b
}

console.log("The product of a and b is ",pro(5,6))

const hello =(a,b)=>{
    return a-b
}

console.log("The product of a and b is ", hello(2,3))


greet=()=>{
    console.log("HEllo k xa halkhabar")
}
greet()



