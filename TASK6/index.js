// Write a constructor for the class Movie, which takes a String representing the title of the movie,
//  a String representing the studio, and a String representing the rating as its arguments,
//  and sets the respective class properties to these values.
// The constructor for the class Movie will set the class property rating to "PG" 
// as default when no rating is provided
class Movie{



    constructor (Title,studio,rating){
        this.Title = Title
        this.studio = studio
        this.rating =   rating 

    }
    
    

}
let movie1= new Movie("The pursuit of happiness","SVS","PG10")
// Write a piece of code that creates an instance of the class Movie with the title 
// “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13
let movie3 = new Movie ("Casino Royale","Eon Productions","PG13")
console.log(movie1)
console.log(movie3)

// Write a method getPG, which takes an array of base type Movie as its argument, and returns 
// a new array of only those movies in the input array with a rating of "PG"
// . You may assume the input array is full of Movie instances. The returned array need not be full.


let newMovie1=new Movie("Casino Royale","Eon Productions","PG13") 
let newMovie2=new Movie("mersal","thenandal","PG")
 let newMovie3=new Movie("beast","sun","PG")
let arr=[newMovie1,newMovie2,newMovie3]
for (let key in arr){

    if (arr[key].rating != "PG"){
        console.log(arr[key])
    }
    
}
// Convert the UML diagram to Typescript class. - use number for double
class Circle {
    
    constructor(radius,color){
        this.radius = radius
        this.color = color
    }
    getRadius(){
        return this.radius.toFixed(1)
    }
    setRadius(){
        return this.radius.toFixed(1)
    }
    getColor(){
        return this.color.toString()
    }
    setColor(){
        return this.color.toString()
    }
    tostring(){
        return [this.radius.toString(),this.color.toString()]
    }
    getArea(){
        let area = Math.PI* this.radius*this.radius
        return area.toFixed(1)
    }
    getCircumference(){
        let cricum = 2*Math.PI*this.radius
        return cricum.toFixed(1)
    }
} 
let radiCol = new Circle(1.0,"red")
console.log(radiCol.getRadius())
console.log(radiCol.setRadius())
console.log(radiCol.getColor())
console.log(radiCol.setColor())
console.log(radiCol.tostring())
console.log(radiCol.getArea())
console.log(radiCol.getCircumference())

// Write a “person” class to hold all the details.

class Person{
    constructor (FIRSTNAME,LASTNAME,AGE,FATHER_NAME,DOB,HEIGHT,WEIGHT,OCCUPATION,
        QUALIFICATION){

            this.FIRSTNAME = FIRSTNAME
            this.LASTNAME = LASTNAME
            this.AGE = AGE
            this.FATHER_NAME = FATHER_NAME
            this.DOB = DOB
            this.HEIGHT = HEIGHT
            this.WEIGHT = WEIGHT
            this.OCCUPATION = OCCUPATION
        }
}


let ansari = new Person("Mohammed","Ansari",24,"Abdul_Majeed","15/03/1998",
"170 cm","75 Kg","IT","M.sc Chemistry")

console.log(ansari)


// write a class to calculate the uber price.

class UBER {

    constructor(Km){
        this.Km = Km
    }
kiloM(){
        if (this.Km <= 20 ){
            return "PRICE - "+6 * this.Km 
        }else{return "PRICE - "+12 * this.Km }
        

    }
}
let kilo = new UBER(21)
console.log(kilo.kiloM())
