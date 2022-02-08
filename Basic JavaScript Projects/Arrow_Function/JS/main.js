//Function with no arrows
function NoArrow()
{
    document.getElementById("NoArrow").innerHTML = "This text is not using arrows.";
}

//Function with arrows
arrow = (value) => "This text is using " + value;
document.getElementById("Arrow").innerHTML = arrow("arrows.");







