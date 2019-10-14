class Student{
    // static semester="8th"
    // family_members; //private member
    constructor(name,age,semester){
        this.name=name
        this.age=age
    }
    print_detail(name){
        console.log("My name is "+this.name+" and age is "+this.age)
    }
    static print_semester(name){
        console.log("My semester is "+this.semester) //semester will be undefinded
    }
    get get_name(){
        return this.name
    }
    set set_name(name){
        this.name=name
    }
}

Student.semester="8th"
class bcs extends Student {
    constructor(){
        super(name,age) // calling consstructor of parent class
    }
}

stu1 =new Student("Zeeshan",22,"8th")
stu2 =new Student("Faizan",21,"8th")
stu1.print_detail()
stu2.print_detail()
Student.print_semester()
// stu1.print_semester()

console.log(a) // accessing before declaration
var a=5

// (function self_invoking_fun(){
//     console.log("I am called")
// }
// )();