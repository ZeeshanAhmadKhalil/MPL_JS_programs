function Student(name,age){
    this.name=name
    this.age=age
}
stu1=new Student("zeeshan",22)
stu2=new Student("faizan",21)
Student.prototype.program="BCS"
Student.prototype.gender="male"
console.log(stu1)
console.log(stu2)
Object.defineProperty(Student.prototype,"print_info",{
    value:function(){
        console.log(this.name+" "+this.age+" "+this.program)
    }
})
stu1.print_info()
stu2.print_info()
// property_name=prompt("Enter property name")
property_name="name"
students=[stu1,stu2]
for(i=0;i<2;i++){
    if(students[i][property_name]!=undefined){
        console.log(students[i][property_name])
    }
    else{
        console.log("wrong property")
        break
    }
}
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
        // console.log(this)
    }
    show_this() {
        console.log(this)
    }
}
p1=new Person("zeeshan",22)
p2=new Person("faizan",21)
p1.show_this()
console.log()
obj={
    foo:function(name) {
        this.name=name
        return this
    }
}
a=obj.foo("moon")
console.log(a)
console.log(a.constructor)

function foo1(name) {
    this.name=name
    return this
}
a=new foo1("moon")
console.log()
console.log(a)
console.log(a.constructor)
b=foo1("moon")
console.log()
console.log(a)
console.log(a.constructor)
console.log("\nlast")
function foo_a(){
    this.foo_a_inside=function(){
        return this
    }
    return this
}
a=foo_a()
console.log(a)
a_indside=a.foo_a_inside()
console.log(a_indside)
a=new foo_a()
console.log(a)
a_indside=new a.foo_a_inside()
console.log(a_indside)

console.log("very last")
object={
    fooo:function(){
        this.fooo_inside=function(){
            return this
        }
        return this
    }
}
a=object.fooo()
console.log(a)
a_indside=a.fooo_inside()
console.log(a)
a=new object.fooo()
console.log(a)
a_indside=new a.fooo_inside()
console.log(a)