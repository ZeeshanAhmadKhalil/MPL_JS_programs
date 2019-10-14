console.log(10>9)
console.log(Boolean(10))
console.log(Boolean(10+12))
console.log(Boolean("10"))
x=0
console.log(Boolean(x))
x=1
console.log(Boolean(x))
x=123
console.log(Boolean(x))
x=-1
console.log(Boolean(x))
x=-0
console.log(Boolean(x))
x=""
console.log(Boolean(x))
x=null
console.log(Boolean(x))
x=NaN
console.log(Boolean(x))
x=Infinity
console.log(Boolean(x))  // Anyyhing with a value is true and anything without a value is false
x=false
y=new Boolean(false)
console.log(x==y)
console.log(x===y)
console.log(typeof(x))
console.log(x.constructor)
console.log(typeof(y))
console.log(y.constructor)
x=new Boolean(false)
y=new Boolean(false)
console.log(x==y)
console.log(x===y) //objects cant be compared so false
x=undefined
console.log(Boolean(x))