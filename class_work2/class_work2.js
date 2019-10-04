stu={"stu name":"Ali","age":22,fname:undefined}
// console.log(stu."stu name") ERROR
// console.log(stu.stu name) ERROR
console.log(stu["stu name"])

// var inp=prompt("input")
// var inp=prompt("input")
inp="stu name"
console.log(stu.inp) 
console.log(stu[inp])
console.log(stu.fname)
// if(age in stu){
//     console.log("exists")
// }
a=10
b=a
b=20
console.log(a+" "+b)
a={age:20}
b=a
b.age=30
console.log(a.age+" "+b.age)

function Student(name,age){ //  Creating an obj using a funciton
    var stu1={}
    stu1.age=age
    stu1.name=name
    return stu1
}
s1=Student("ali",28) // 
console.log(s1)
s2=new Student("moon",22) // 
console.log(s2)

function normal_Student(name,age){ //  Creating an obj using a funciton
    var stu1={}
    stu1.age=age
    stu1.name=name
    return stu1
}

function constructor_Student(name,age){ //  Creating an obj using a funciton
    // var stu1={}
    this.age=age
    this.name=name
    // return stu1
}

function mix_Student(name,age){ //  Creating an obj using a funciton
    var stu1={}
    stu1.age=age
    stu1.name=name
    this.age=age
    this.name=name
    // return stu1
}

s1=normal_Student("ali",28) // 
console.log(s1)
s2=new constructor_Student("moon",22) // 
console.log(s2)
s2=constructor_Student("moon",22) // cant call const funciton w/o new, it'll give undefined 
console.log(s2)
s1=new normal_Student("ali",28) // 
console.log(s1)
s1=new mix_Student("ali",28) // 
console.log(s1)

function foo(){
    console.log("Hello")
}
foo()

obj={
    foo:function(){
        console.log("Hello")
    }
}
obj.foo()
function foo1(){
    console.log(this)
}
foo1()
obj={
    foo3:function(){
        console.log(this)
    }
}
obj.foo3(age)
function foo4(){
    console.log(this)
    this.prop_foo4=function(){
        console.log(this)
    }
}
f1=new foo4();
f1.prop_foo4()
console.log(f1)
// console.log(f11)

function foo5(){
    console.log(this)
    this.prop_foo4=function(){
        // console.log(this)
    }
}
f1= foo5(); //  
// f1.prop_foo5()   Will give error cuz of this
// console.log(f1)