//The concat() method joints multiples strings in one
function Concatenate()
{
    var string1 = "I'm using ";
    var string2 = "a laptop ";
    var string3 = "right now to "
    var string4 = "study JavaScript programming."

    var string1 = string1.concat(string2, string3, string4);

    document.getElementById("Concatenate").innerHTML = string1;
}

//The slice() method takes a certain number of string...
//...from a starting point to a finish point
function Slice()
{
    var string1 = "Howard is a school of magic."
    var sliceSection = string1.slice(0, 6);
    document.getElementById("Slice").innerHTML = sliceSection;
}

//toUpperCase() method convert all the string to upper case letter.
function ToUpperCase()
{
    var string1 = "This whole sentence is in upper case letter."
    var toUpperCaseSentence = string1.toUpperCase();
    document.getElementById("ToUpperCase").innerHTML = toUpperCaseSentence;
}

//The search() method returns the first index number...
//...of the match search.
function Search()
{
    var string1 = "The deers began migration in October.";
    var indexSearch = string1.search("deers");
    document.getElementById("Search").innerHTML = indexSearch;
}

//toString() method convert data from other types to string type
function ToString()
{
    var x = 13.5;
    document.getElementById("ToString").innerHTML = x.toString();
}

//toPrecision() method takes a length of a number and format it...
//...to a more readable version of it. 
function Precision()
{
    var pi = 3.14159265359;
    var precisionPI = pi.toPrecision(3);
    document.getElementById("Precision").innerHTML = precisionPI.toString();
}

//The toFixed() method convert the number to a whole number...
//...or rounds up to the specified decimal length
function Fixed()
{
    var x = 45.61854124640124;
    var fixedX = x.toFixed(2);
    document.getElementById("Fixed").innerHTML = fixedX;
}

//It simply returns the primitive value of a string.
//The message of it would still be the same.
function ValueOf()
{
    var string1 = "This is a string";
    var result = string1.valueOf();
    document.getElementById("ValueOf").innerHTML = result;
}













