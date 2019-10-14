for(i=0;i<10;i++){
    console.log(i)
}
a=["moon","faizan","mubeen"]
for(i=0,len=a.length,text="";i<len;i++){
    text=text+" "+a[i]
}
console.log(text)

stu={
    name:"Zeeshan",
    age:22,
    cgpa:3.97
}
for(i in stu){
    console.log("My "+i+" is "+stu[i])
}
stu=["moon","faizan","mubeen"]
for(i of stu){
    console.log(i)
}
name="Zeeshan Ahmad Khalil"
for(i of name){
    console.log(i)
}