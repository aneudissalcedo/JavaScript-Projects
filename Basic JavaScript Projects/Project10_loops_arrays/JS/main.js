//A Nested while loop counting up from 1 to 10
function CallLoop()
{
    var Digit = "";
    var x = 1;
    
    while(x < 11)
    {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//The propert length allows us to know the exactly length of a string
function Length()
{
    var string1 = "Click here to know my length!";
    document.getElementById("Length").innerHTML = string1.length;
}

//Declaration of global variables
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flaute"];
var content = "";

//A list of musical instruments prints out through a For loop
function ForLoop()
{
    for(var i = 0; i < instruments.length; i++)
    {
        content += instruments[i] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

//An prints of an specific index array
function Array()
{
    var cat = ["sleeping", "eating", "playing", "purring"]
    document.getElementById("Array").innerHTML = "The cat is " + cat[2];
}

//Modified a value from the object Car, and added one additional property to the object.
function constant_function()
{
    const Car =
        {
            brand: "ford",
            model: "escape",
            year: 2012,
            color: "white"
        };
    
    Car.color = "red";
    Car.price = "$4,000";
    document.getElementById("Constant").innerHTML 
        = "The color of this car is " + Car.color + " and cost " + Car.price;
}

//Utilization of the let keyword
function Let()
{
    let x = 5;
    document.getElementById("Let").innerHTML = x;
}

//This function prints out and utilize the function of add numbers
function ReturnValue()
{
    document.getElementById("ReturnValue").innerHTML = AddTwoNumbers(5,3);
}

//This function takes two parameters and sum them up
function AddTwoNumbers(x, y)
{
    return (x + y);
}

//An defined object with description property.
let computer = 
    {
        brand: "lenovo ",
        color: "black ",
        year: 2018,
        description: function()
        {
            return "This computer is a " + computer.color + computer.brand 
                + "of the year " + computer.year;
        }
    }

document.getElementById("Computer").innerHTML = computer.description();

//This show the break keyword
function Break()
{
    let text = "";
    for(let i = 0; i < 10; i++)
    {
        if(i == 3)
        {
            //When the break execute, it finish the loop.
            break;
        }
        text += "The number is " + i + "<br>";
    }

    document.getElementById("Break").innerHTML = text;
}

//This show the continue keyword
function Continue()
{
    let text = "";
    for(let i = 0; i < 10; i++)
    {
        if(i == 3)
        {
            //When the continue execute, it skip the iteration triggered...
            //...and continue with the looping.
            continue;
        }
        text += "The number is " + i + "<br>";
    }

    document.getElementById("Continue").innerHTML = text;
}





















