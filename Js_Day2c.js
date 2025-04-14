// <<<<<<<<<<<<<<<<STRINGS >>>>>>>>>>>>>>>>>


let name="Krishna Bahadur"
console.log(name.length)

// --------------------------------------------------

let n1="Ram"
let n2="Laxman"
let sen=`${n1} is the big brother of ${n2}`

console.log(sen)

console.log('he said \'Thank you\' ')

// --------------------------------------------------

console.log(name.toUpperCase())
console.log(name.slice(8,12))
console.log(name.slice(8))



// --------------------------------------------------

// <<<<<<<<<<<<<<<<ARRAYs >>>>>>>>>>>>>>>>>

let marks=[32,43,42,41,54,34,"Absent",false]

console.log(marks)
marks[0]=9999
for (let i=0;i<marks.length;i++){
    console.log(marks[i])
}
// --------------------------------------

let numb=[1,2,3,4,5,6,7]
// let nu=numb.toString()
// console.log(nu)
// let nuu=numb.join("_")
// console.log(nuu)

// console.log(numb.pop()) // removes last element
// console.log(numb)
// console.log(numb.shift()) // removes the first element
// console.log(numb)
// numb.unshift(111) // adds first element
// numb.push(999) // ads last element

// console.log(numb)

let num1=[1,2,34,56,7,8,4]
let num2=[14,223,34,156,47,58,45]
let num3=[134,2523,34,5156,467,585,4545]

let nn= num1.concat(num2,num3)
console.log(nn)
console.log(nn.sort())









