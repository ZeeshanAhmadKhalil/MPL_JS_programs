// "use strict";
var person= {
    name:"zeeshan",
    gender:"male",
    print_info:function() {
        console.log("My name is "+this.name+" and gender is "+this.gender)
    }
}
person.print_info()
var x= this; // the it is now reffering to window object so use html now
console.log(x)
function return_this(){
    return this  // it will only refer to window if we remove strict mode at line 1
}
console.log(return_this())

car={
    name:"bogatti chyron",
    color:"black",
    get_car:function(){
        return this
    }
}
c=car.get_car()
console.log(car.name)

zeeshan={
    cgpa:3.97,
    age:22
}
faizan={
    cgpa:4,
    age:21,
    gender:"male",
    print_details:function(){
        console.log(this.age+" "+this.cgpa+" "+this.gender)
    }
}
faizan.print_details.call(zeeshan)
faizan.print_details.apply(zeeshan)

