console.log(typeof("john"))
console.log(typeof(3.14))
console.log(typeof(NaN))
console.log(typeof(false))
console.log(typeof([1,2,3]))
console.log(typeof({name:"Ali",age:22}))
console.log(typeof(function(){console.log("anonymous function")}))
console.log(typeof(myCar))
console.log(typeof(null))
console.log(typeof(undefined))
console.log(typeof(Infinity))
console.log()

console.log(("john").constructor)
console.log((3.14).constructor)
console.log((NaN).constructor)
console.log((false).constructor)
console.log(([1,2,3]).constructor)

function is_array(array){
    if(array.constructor===Array)
    return true
    return false
}
a=[1,2,3]
b=1
console.log(is_array(a))
console.log(is_array(b))

function is_function(function_){
    if(function_.constructor===Function)
    return true
    return false
}
a=function(){}
b={a:"1"}
console.log(is_function(a))
console.log(is_function(b))

// Converting number to string
x=1.1
x_s=String(x)
console.log(x_s)
console.log(x_s.constructor)
x=123
x_s=String(x)
console.log(x_s)
console.log(x_s.constructor)
x_s=String(123+456)
console.log(x_s)
console.log(x_s.constructor)

x=1.1
x_s=x.toString()
console.log(x_s)
console.log(x_s.constructor)
x=123
x_s=x.toString()
console.log(x_s)
console.log(x_s.constructor)
x_s=(123+456).toString()
console.log(x_s)
console.log(x_s.constructor)

console.log()
a=10003.12345
console.log(a.toExponential())
console.log(a.toFixed(8))
console.log(a.toPrecision(8))

// Converting boolean to string
console.log(String(true))
console.log(String(false))
console.log((true).toString())
console.log((false).toString())

//String to Number
console.log()
console.log(Number("3.14"))
console.log(Number(" "))
console.log(Number(""))
console.log(Number("99 88"))
console.log(Number("12a"))
console.log(Number("a12"))
console.log()
console.log(parseInt("3.14"))
console.log(parseInt(" "))
console.log(parseInt(""))
console.log(parseInt("99 88"))
console.log(parseInt("12a"))
console.log(parseInt("a12"))
console.log()
console.log(parseFloat("3.14"))
console.log(parseFloat(" "))
console.log(parseFloat(""))
console.log(parseFloat("99 88"))
console.log(parseFloat("12a"))
console.log(parseFloat("a12"))

// using unary+operator to convert to number
console.log()
y="51"
x=+y
console.log(x)
console.log(x.constructor)
y="moon"
x=+y
console.log(x)
console.log(x.constructor)

// Automatic type conversion
console.log()
console.log(5+null)
console.log("5"+null)
console.log("5"+2)
console.log("5"-2)
console.log("5"*"2")
console.log("5"*"a")