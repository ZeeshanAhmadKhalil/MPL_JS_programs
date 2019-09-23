names=["zeeshan","faizan","mubeen"]
a=names.toString()
console.log(names)
console.log(a)
a=names.join()
console.log(a)
a=names.join(" ")
console.log(a)
a=names.join("*")
console.log(a)
console.log(names.pop())
names.push("iqra")
console.log(names)
console.log(names.shift())
console.log(names)
console.log(names.unshift("moon"))
console.log(names)
names[0]="Zeeshan"
console.log(names)
names[names.length]="Mubeen"
console.log(names)
delete names[names.length-1]
console.log(names)
names.splice(2,2,"iqra atta","mubeen")
console.log(names)
names.splice(2,1)
console.log(names)
other_names=["iqra","salma","hina"]
combined_names=names.concat(other_names)
console.log(combined_names)
more_names=["bilal","salman","sunny"]
combined_names=names.concat(other_names,more_names)
console.log(combined_names)
alphabets="A,B,C"
combined_names=names.concat(other_names,more_names,alphabets)
console.log(combined_names)
girls=combined_names.slice(3,6)
console.log(girls)