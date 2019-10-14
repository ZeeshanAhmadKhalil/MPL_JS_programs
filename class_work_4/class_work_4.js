class Student {
    addNumbers(n1, n2, n3) {
        return n1 + n2 + n3;
    }
    
    addNumbers(n1, n2) {
        return n1 + n2;
    }
}
stu=new Student
var sum = stu.addNumbers(1, 2, 3);
var sum1 = stu.addNumbers(1, 2);
console.log(sum)
console.log(sum1)
function print(first_name,last_name) {
    console.log(first_name+" "+last_name)
}
print("Zeeshan")
// there is a convension in JS to start a private datamember with _ but it will be still public


                      // concept of closure in js
 function outer() {
    console.log("this is outer function")
     function inner() { // local scope function
         console.log("this is inner function")
     }
 }
 outer()
//  inner()   Error not in current scope
//  outer().inner() still error syntax error
function outer1() {
    console.log("this is inner function")
     function inner1() { // local scope function
         console.log("this is outer function")
     }
     inner1()
 }
 outer1()
 console.log("\n")
 function outer2() {
    console.log("this is inner function")
     function inner2() { // local scope function
         console.log("this is outer function")
     }
     return inner2
 }
 b=outer2()
 b()  
 function divide(a,b) {
     return a/b
 }
 console.log(divide(1,0))

 //                    use of closure i.e variables are retained
 function outer5(a,b){
     function inner5() {
         if(b==0)
         return "not possible"
         else
         return a/b
     }
     return inner5
 }
 b=outer5(1,0)
 console.log(b())
 b=outer5(1,3)
 console.log(b())