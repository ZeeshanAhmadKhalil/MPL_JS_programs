a=10
console.log(a)
function assignment(){
    "use strict"
    // b=20 error
}
assignment()
function my_same_info(name,name){
    console.log(name+" "+name)
}
my_same_info("moon","khan")
var x=0111   // base 8
console.log(x)
var x=0x111   // base 16
console.log(x)
var x="\55"   // base print a symbol
console.log(x)
var x="\123"   // base print a symbol
console.log(x)

var teacher={
    grade:"lecturer"
}
Object.defineProperty(teacher,"name",{value:"Imran",writable:false})
teacher.grade="assist professor"
teacher.name="M Imran" 
console.log(teacher)
console.log(teacher.name)

var triangle={
    get color(){
        return "red"
    }
}
triangle.color="blue"
console.log(triangle.color)

delete Object.prototype // no error but will not delete as well

var static=2
console.log(static)

book={
    name:"MVC by swoski"
}
with (book){
    name="Multi Variable Calculus ny swoski"
}
console.log(book)

eval("var f_name='zulfiqar'")
console.log(f_name)