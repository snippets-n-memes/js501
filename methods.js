var Arr  = [ 0, 1, 2, 3, 4, 5]

// for(let i=0; i<Arr.length; i++) {
//   console.log(Arr[i])
// }

// Arr.forEach((e,i)=> console.log(`${e} at index ${i}`))

// console.log(Arr.map((e)=>console.log(e)))
// console.log(Arr.filter((e)=>e>3))

let sum = 0;
Arr.map((e)=>e+1)


console.log(Arr.reduce((acc,current)=>{
  if (current > acc) return current
  else return acc
},0))
console.log(Arr)