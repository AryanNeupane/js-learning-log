
let n=[1,2,3,4,5,6,7,8,9,10]

let x=n.map((value)=>{
    // console.log(value)
    return value*=2
})
// console.log(x)

let y=n.map((value,ind,array)=>{
    // console.log(value,ind,array)
    return value+=ind
})
// console.log(y)
// _________________________________________________

let ar1=[23,43,5,324,,5667,7,4,5,232,33,45]

let ar2=ar1.filter((n)=>{
    return n<50
})
// console.log(ar2)

// _________________________________________________

let a=[1,3,4,5,6,8,9]

let r=a.reduce((c,v)=>{
    return c+v
})
console.log(r)

// _________________________________________________

