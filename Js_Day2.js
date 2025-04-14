
let a=parseInt(prompt("Enter your age "))
console.log("Your age is"+a)
if(a<18&& a>=0){
alert("you cannot vote")
}
else if(a<0){
    alert("What the hell! negative age ???")
} else {
    alert("You can vote")
}
console.log("You can", a<18?"not drive":"drive")

// --------------------------------------------------
// Nested if else 

// if(true){
//     if(true){

//     }

//     else{

//     }
// }else{

// }

// --------------------------------------------------

let day=parseInt(prompt("Enter your day "))

switch (day){
    case 1 :
        alert("Sunday")
        break
    case 2 :
        alert("Monday")
        break
    case 3 :
        alert("Tuesday")
        break
    case 4 :
        alert("Wednesday")
        break
    case 5 :
        alert("Thursday")
        break
    case 6 :
        alert("Friday")
        break
    case 7 :
        alert("Saturday")
    default:
        alert("Enter valid num")
}

// --------------------------------------------------

