const pi=3.14
// pi=10 cant assign a constant
// pi=pi+0.0001

a=10
{
    const a=20
    console.log(a)
}
console.log(a)
// const my_name; also error here
//  my_name="Zeeshan Ahmad" incorrent so error
const car={name:"chyron",brand:"bogati",color:"red"}
console.log(car)
car.color="bluish_black"
console.log(car.color)   // can change oproperties of constant obk
// car={name:"agra",brand:"konengsegg",color:"white and black"}  error
const class_fellows=["zeeshan","Faizan","Mubeen"]
class_fellows[0]="moon"     // can change value of constant arrays
class_fellows.push("Nouman")
console.log(class_fellows)
// class_fellows=["Iqra","Maryam","Saba"]  error

//                   REDECLARATION
var a_=10
var a_=20
a_=30
console.log(a_)

var b=10
// const b=20 not allowed
{
    var c=10
    // const c=20 not allowed
}
const d=1
{
    const d=2
    console.log(d)
}
{
    const d=3
    console.log(d)
}
console.log(d)
let e=1
// const e=2  not allowed
{
    let e=1
    // const e=2  not allowed
}

//                          HOSTING
friend="Faizan"
var friend
console.log(friend)

// friend1="Faizan"   ERROR    
// const friend1
// console.log(friend1)

// friend2="Faizan"   cant use before declaration
let friend2
console.log(friend2)

let ab=10
{
    ab+=1
}
console.log(ab)

let cd=10
{
    let cd=20
}
console.log(cd)

let af=10
// var af=20 error

let ak=10
{
    // var ak=20 error
}
arr=[3,2,10,4,5]
 for(i in arr)
 console.log(i)
 for(i of arr)
 console.log(i)
 console.log(arr[6])

 let foo=0
 const arr1=[1,2,3,4]
 for(let el of arr1){
    // console.log("el="+el)
     foo+=el++
    //  console.log("foo="+foo)
     
 }
 console.log(foo)