//This function utilize the switch functionality...
//...e.g. when an input color match a case listed...
//...in the switch, it execute the corresponding output for it.
function ColorFunction()
{
    let colorOutput;
    let colors = document.getElementById("ColorInput").value;
    let colorString = " is a great color!";

    switch(colors)
    {
        case ("Red"):
            colorOutput = "Red" + colorString;
            break;
        case ("Yellow"):
            colorOutput = "Yellow" + colorString;
            break;
        case ("Green"):
            colorOutput = "Green" + colorString;
            break;
        case ("Blue"):
            colorOutput = "Blue" + colorString;
            break;
        case ("Pink"):
            colorOutput = "Pink" + colorString;
            break;
        case ("Purple"):
            colorOutput = "Purple" + colorString;
            break;
        default:
            colorOutput = "Please enter a color exactly as written on the above list.";        
    }
    document.getElementById("Output").innerHTML = colorOutput;
}

//Change a text paragraph using a function with class name
function Hello()
{
    let output = document.getElementsByClassName("Hello");
    output[0].innerHTML = "I told you, now the text is changed!";
}

//Display a text inside the canvas
var canvas = document.getElementById("ID_Name");
var canvasContext = canvas.getContext("2d");
canvasContext.font = "100px Arial";
canvasContext.strokeText("Name", 95, 160);

//Gives the canvas a gradient
var canvas2 = document.getElementById("ID_Gradient");
var canvasContext2 = canvas2.getContext("2d");

var gradient = canvasContext2.createLinearGradient(0, 0, 500, 0);
gradient.addColorStop(0, "blue");
gradient.addColorStop(1, "cyan");

canvasContext2.fillStyle = gradient;
canvasContext2.fillRect(50, 30, 400, 200);






























