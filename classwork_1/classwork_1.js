student={
    name:"Zeeshan",
    age:28,
    main_work:function(){
        console.log(this.name+" study daily")
    }
}
student.main_work()
class Student{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
stu1=new Student("Zeeshan",22)
console.log(stu1)
student.father_name="Zulfiqar"//adding new property in student
console.log(student)
student.display_age=function(){// adding function in student
    console.log("The age is "+student.age)
}
student.display_age()
Object.defineProperty(student,"hobby",{value:"movies",writable:"true"})
console.log(student.hobby)