a=[2,12,4,37,5]
b=[2,12,4,37,5]
a.sort()
b.sort()
console.log(a)
console.log(b)
a.reverse()
b.reverse()
console.log(a)
console.log(b)
a.sort(function(a,b){
    return a-b
})
console.log(a)
a.sort(function(a,b){
    return b-a
})
console.log(a)
A=[1,2,3,4,5,6,7,8,9,10]
A.sort(function(a,b){
    return 0.5-Math.random()
})
console.log(A)
A.sort(function(a,b){
    return a-b
})
console.log("Max="+A[0])
console.log("Min="+A[A.length-1])
Students=[{name:"Zeeshan",age:22},
          {name:"Faizan",age:21},
          {name:"Mubeen",age:25}           
         ]
Students.sort(function(a,b){
    x=a.name.toLowerCase()
    y=b.name.toLowerCase()
    if(x>y)
    return 1
    else if(x<y)
    return -1
    else
    return 0
})
console.log(Students)
Students=[{name:"Zeeshan",age:22},
          {name:"Faizan",age:21},
          {name:"Mubeen",age:25}           
         ]
Students.sort(function(a,b){
    x=a.age
    y=b.age
    if(x>y)
    return 1
    else if(x<y)
    return -1
    else
    return 0
})
console.log(Students)