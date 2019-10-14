"use strict"
// x=3.14  error
function assignment(){
    // x=3.14 also error 
}
assignment()

// stu={
//     name:"zeeshan",  error
//     semester:8
// }
var stu={
    name:"zeeshan",
    semester:8
}
console.log(stu.name+" "+stu.semester)

var a=10
// delete a error

function my_info(name,gender){
    console.log(name+" "+gender)
}
// delete my_info error

// function my_same_info(name,name){
//     console.log(name+" "+name)
// }
// var x=024
// var x=0x24  error
// var x="\024"

var teacher={
    grade:"lecturer"
}
Object.defineProperty(teacher,"name",{value:"Imran",writable:false})
teacher.grade="assist professor"
// teacher.name="M Imran" error
console.log(teacher)
console.log(teacher.name)

var triangle={
    get color(){
        return "red"
    }
}
// triangle.color="blue"
console.log(triangle.color)

// delete Object.prototype

// var eval=1
// var arguments=1   cant use eval and arguments as a variable in strict mode 
//var static=2       also we can not use predefined words like let static etc i.e FUTURE PROOF

var evals=1
var argument=1 //but can use them

// book={
//     name:"MVC by swoski"
// }
// with (book){
//     name="Multi Variable Calculus ny swoski"      Cant use with in strict mode
// }
// console.log(book)

// eval("var f_name='zulfiqar'")
// console.log(f_name)

function check_this_in_strict_mode(){
    alert(this) //make html file for it
    console.log(this)
    return this
}
var b=check_this_in_strict_mode()
console.log(b)
