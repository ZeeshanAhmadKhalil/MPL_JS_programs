a=[2,12,4,37,5]
b=[4, 1, 3, 2]
a.sort()
b.sort()
console.log(a)
console.log(b)
a.reverse()
b.reverse()
console.log(a)
console.log(b)
a=[2,12,4,37,5]
b=[4, 1, 3, 2]
i=0
a.sort(function(a,b){
    // console.log(i++)
    // console.log("a="+a)
    // console.log("b="+b)
    return a-b
})
i=0
b.sort(function(a,b){
    // console.log(i++)
    // console.log("a="+a)
    // console.log("b="+b)
    return b-a
})
console.log(a)
console.log(b)
A=[1,2,3,4,5]// random sorting
A.sort(function(a,b){
    // console.log(i++)
    // console.log("a="+a)
    // console.log("b="+b)
    return 0.5-Math.random()
})
console.log(A)
A.sort(function(a,b){
    // console.log(i++)
    // console.log("a="+a)
    // console.log("b="+b)
    return b-a
})
console.log("Max in A="+A[0])
console.log("Min in A="+A[A.length-1])
Student=[
    {"Name":"faizan","CGPA":4},
    {"Name":"Mubeen","CGPA":3.7},
    {"Name":"Zeeshan","CGPA":3.97}
]
Student.sort(function(a,b){
    return b.CGPA-a.CGPA
})
console.log(Student)
var fruits = ["Banana", "Orange", "Apple", "Kiwi"]
fruits.sort()
console.log(fruits)
Student=[
    {"Name":"Zeeshan","CGPA":3.97},
    {"Name":"faizan","CGPA":4},
    {"Name":"Mubeen","CGPA":3.7}
]
Student.sort(function(a,b){
    x=a.Name.toLowerCase()
    y=b.Name.toLowerCase()
    if(x>y)
    return 1
    if(x<y)
    return -1
    return 0
})
console.log(Student)
Student=[
    {"Name":"Zeeshan","CGPA":3.97},
    {"Name":"faizan","CGPA":4},
    {"Name":"Mubeen","CGPA":3.7}
]
Student.sort(function(a,b){
    x=a.Name.toLowerCase()
    y=b.Name.toLowerCase()
    if(x<y)
    return 1
    if(x>y)
    return -1
    return 0
})
console.log(Student)