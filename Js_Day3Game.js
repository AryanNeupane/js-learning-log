

r=Math.floor((Math.random()*10)+1)
console.log(r)
let score=10
for(let i=0;i<r;i++){
    let g=prompt("Enter Your guess")
    if(g==r){
        alert(`You won! Score: ${score-i} `)
        break
    }else{
    score-=1
     if(r<g){
        alert("Try lower number")
     }
     alert("Try higher number")
    }
    
}
