b=true
console.log("\n"+b)
console.log(Number(b))
console.log(parseInt(b))
console.log(parseFloat(b))
b="123"
console.log("\n"+b)
console.log(Number(b))
console.log(parseInt(b))
console.log(parseFloat(b))
b="123.55"
console.log("\n"+b)
console.log(Number(b))
console.log(parseInt(b))
console.log(parseFloat(b))
b="NaN"
console.log("\n"+b)
console.log(Number(b))
console.log(parseInt(b))
console.log(parseFloat(b))
b="Infinity"
console.log("\n"+b)
console.log(Number(b))
console.log(parseInt(b))
console.log(parseFloat(b))
b="1e23"
console.log("\n"+b)
console.log(Number(b))
console.log(parseInt(b))
console.log(parseFloat(b))
b="0xA"
console.log("\n"+b)
console.log(Number(b))
console.log(parseInt(b))
console.log(parseFloat(b))

console.log("\n"+"Converting from other bases to base 10 by parsrInt")
console.log(parseInt("FFFF",16))
console.log(parseInt("101010",10))
console.log(parseInt("7777",8))
console.log(parseInt("10",2))
b="123blue"
console.log("\n"+b)
console.log(Number(b))
console.log(parseInt(b))
console.log(parseFloat(b))
b="10 20 30"
console.log("\n"+b)
console.log(Number(b))
console.log(parseInt(b))
console.log(parseFloat(b))
// Class work
A=[1,2,3]
console.log("\n"+A)
for(a in A)
{
    console.log(A[a])
}
for(a in A)
{
    console.log(a)
}
for(a of A)
{
    console.log(a)
}
console.log("\n"+"accessing array")
console.log(A[0])