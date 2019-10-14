class Car {
    constructor(brand){
        this.brand=brand
    }
    show_company(car_name){
        console.log("The brand of "+car_name+" is "+this.brand)
    }
    static show_car_type(x){
        console.log("The type of all cars is "+Car.car_type+" but my car brand is "+x.brand)
    }
}
agera=new Car("Konengsegg")
agera.show_company("agera")
Car.car_type="Racing cars" //static variable
Car.show_car_type(agera)

class Tyre extends Car{
    constructor(tyre_size,brand){
        super(brand)
        this.tyre_size=tyre_size
        // this.car_color=car_color
    }
    show_tyre_size(){
        console.log("The size of "+this.brand+" tyre is "+this.tyre_size)
    }
    set set_car_color(car_color){
        this.car_color=car_color
    }
    get get_car_color(){
        return this.car_color
    }
}
chyron=new Tyre("medium","Bogati")  //MULTILEVEL INHERITANCE
chyron.show_tyre_size()
chyron.set_car_color="bluish_black"
console.log(chyron.get_car_color)
class Rim extends Tyre{
    constructor(rim_color,tyre_size,brand){
        super(tyre_size,brand)
        this.rim_color=rim_color
    }
    show_rim_color(){
        console.log("The Rim color of "+this.brand+"'s car with "+this.tyre_size+" tyre is "+this.rim_color)
    }
}
urus=new Rim("red","small","lambogini")
urus.show_rim_color()

// regra = new Car1("Konengsegg") NO HOSTING you have to make object after class

i=""
class Car1{
    constructor(brand){
        this.brand=brand
        //name="" // classes are in restrict mode that is the name should be defined first
        i=1  // i was defined first
    }
    show_brand(){
        console.log(this.brand)
    }
}
regra = new Car1("Konengsegg")

