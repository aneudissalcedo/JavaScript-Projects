//This function verify if you can ride or not
function Ride_Function(){
    //Declaration of variable
    var height;
    var canRide;

    //The variable height gets assigned the value the user input
    height = document.getElementById("Height").value;

    //If height is less than the Id height value...
    //...then you are too short to ride, otherwise you can ride.
    canRide = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = canRide + " to ride.";
}

//Demonstration of the 'new' keyword
function Person(name, age){
    this.Person_Name = name;
    this.Person_Age = age;
}

var Jose = new Person("Jose", 19);

function New_and_This(){
    document.getElementById("New_and_This").innerHTML 
        = Jose.Person_Name + " is " + Jose.Person_Age + " years old."; 
}

//Use of nested function
function NestedFunction(){
    document.getElementById("Nested_Function").innerHTML = Count();
    //this is a nested function
    function Count(){
        var startCount = 0;
        //this is another nested function
        function PlusOne(){startCount++;}
        PlusOne();
        return startCount;
    }
}










