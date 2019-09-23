var names=["Zeeshan","Faizan","Mubeen"]
console.log(names[names.length-1])
names[0]="moon"
console.log(names)
other_names=new Array("Ali","Naveed","Umer")
var faizan={
    "name":"faizan",
    "age":21,
    "CGPA":4,
}
console.log(faizan.name)
for(x of names){
    console.log(x)
}
console.log("\n")
for(x in names){
    console.log(names[x])
}

names[4]="iqra"
console.log(names)
array=new Array(20)
console.log(array)
// zeeshan=["name":"zeeshan","age":22,"CGPA",3.97] JS dont support associative arrays
