name="Zeeshan Ahmad Khallil"
console.log(name.length)
console.log(name.indexOf("A"))
console.log(name.indexOf("h"))
console.log(name.lastIndexOf("h"))
console.log(name.indexOf("x"))
console.log(name.lastIndexOf("Zeeshan",12))
console.log(name.search("x"))
console.log(name.search("m"))// search can take REs
console.log(name.slice(8,13))
console.log(name.slice(-8,16))
console.log(name.substring(8,13)) //cant accept -ive indexes
console.log(name.substr(8,5)) //sec parameter is length
console.log(name.substr(-8,3))
console.log(name.replace("Khallil","Khalil"))
str="me me me"
console.log(str.replace("me","my"))
console.log(str)
console.log(str.replace(/ME/i,"my"))
// console.log(str.replace(/ME/g,"my"))
console.log(name.toUpperCase())
console.log(name.toLowerCase())
nick_name="                moon                   "
console.log(nick_name)
console.log(nick_name.trim())
console.log(name.charAt(5))
console.log(name.charCodeAt(5))
console.log(name[5])
name[5]="G"
console.log(name) //strings are immunable
names="Zeeshan,Faizan,Mubeen"
console.log(names.split(","))
names="Zeeshan Faizan Mubeen"
console.log(names.split(" "))
names="Zeeshan Faizan Mubeen"
console.log(names.split(""))
names="Zeeshan,Faizan,Mubeen"
console.log(names.split("n"))