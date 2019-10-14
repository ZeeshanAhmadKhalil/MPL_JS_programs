name="Zeeshan" // global scope
function show_name() {
    console.log(name)    
}
show_name()
function local_scope_variable_inside(){
    var local_variable="This is a local variable"
    console.log(local_variable)
}
// console.log(local_variable)// cant us local variable here

{
    var age=21 // not block scope as starts with var
}

console.log(age)

{
    let age1=21 // block or local scope
}
// console.log(age1)  

// redeclaring variable with var creates problems
var a=10
{
    var a=5
    console.log(a)
}
console.log(a)

// redeclaring variable with ler creates no problems
var a=10
{
    let a=5
    console.log(a)
}
console.log(a)

// redeclaring variable with var inside function creates no problems
var a=10
function redeclaring(){
    var a=5
    console.log(a)
}
console.log("a_last="+a)

i=5
combined_i=""
for(var i=0;i<10;i++){
    combined_i=combined_i+" "+i
}
console.log(combined_i)
console.log(i)

i=5
combined_i=""
for(let i=0;i<10;i++){
    combined_i=combined_i+" "+i
}
console.log(combined_i)
console.log(i)

//                        Both var and let have same function scope
function to_check_scope(){
    var x=0
}
function to_check_scope1(){
    let x=0
}
//                        Both var and let have same global scope
let x1=14
var x2=24
console.log(window.x2) // now it will only run by html
console.log(window.x1) // will give undefined cuz its scope is not in window

var semester=8
var semester=7  // allowed

var semester=8
// let semester=7  // not allowed

{
    var a=10
    var a=11 //allowed
}

{
    var a=10
    // let a=11 // not allowed
}

{
    let a=10
    // let a=11 // not allowed
}

let a_=20
{
    let a_=30
    console.log(a_)
}
{
    let a_=40
    console.log(a_)
}
console.log(a_)

var _a=20
{
    let _a=30
    console.log(_a)
}
{
    let _a=40
    console.log(_a)
}
console.log(_a)


console.log(car_name) //hosting is allowed bit will guve undefined as no value is given yet
var car_name="bogati chyron"

// console.log(car_name1) hosting not allowed
let car_name1="bogati chyron"