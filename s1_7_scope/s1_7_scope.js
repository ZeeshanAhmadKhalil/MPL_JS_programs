age=23  
function print_local_variable(){
    var semester=8
    name="Zeeshan" 
    console.log("My name is "+name+" and age is "+age)
    console.log("My semester is "+semester)
}
print_local_variable()
console.log("I cam also tell that my age is "+age+" here")
console.log(name) // name is still global cuz it is not declared anywhere
// console.log("My semester is "+semester)  error as semester is declared as local variable