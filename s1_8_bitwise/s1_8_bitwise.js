a=2
b=2
console.log(a&b)
a=1
b=2
console.log(a|b)
a=3
b=2
console.log(a^b)
a=5
console.log(~a)
a=2
console.log(a<<1)
a=3
console.log(a>>1)
console.log(a>>>1)
a=5
console.log(a>>1)
console.log(a>>>1)
a=9
console.log(a>>1)
console.log(a>>>1)
a=-2
console.log(a>>1)
console.log(a>>>1)

// Converting decimal to other bases
console.log()
a=18
console.log(a.toString(2))
console.log(a.toString(3))
console.log(a.toString(8))
console.log(a.toString(16))

// Converting other basis to decimal
console.log()
a=101
console.log(parseInt(a,2).toString(10))
a=121
console.log(parseInt(a,3).toString(10))
a=91
console.log(parseInt(a,16).toString(10))

