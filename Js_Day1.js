// First code in JS
console.log("Hello World")

// --------------------------------------------------

// a="Apple"
// console.log(a)

// // var a="Aeroplane"
// var b=234
// var c=false
// var d=22.33

// var changes anywhere..it doesnot work sepereately in block scope whereas let allows us to use the variable in block scope seperately


// let a="Aeroplane"
// let b=234
// let c=false
// let d=22.33

const author="Aryan"

// author="newAuthor"  -- this causes error as variable declared using const cannot be changed.
console.log("author")
                            

// --------------------------------------------------

// -----DATA TYPES-----

let a=null;
let b=324;
let c=true;
let d=BigInt("222")+BigInt("2")
let e="String"
let f= Symbol("its a symbol")
let g=undefined

console.log(a,b,c,d,f,g)
console.log(typeof d, typeof e)


// --------------------------------------------------

// --OBJECTS--for key-value pair

const item={
    "Ram": 12,
    "Shyam": 23,
    "Sita":21,
    "Gita":36
}

item["lalgopal"] =45,
item["Ram"] ="Student"
console.log(item)

// console.log(item['Sita'])


// --------------------------------------------------

let name = "coderyan";
let age = 21;
console.log("Hello, " + name);
console.log("You are " + age + " years old.");

let isStudent = true;
console.log("Student status:", isStudent);


// --------------------------------------------------



