//Declaration of variables (global scope)
var x = "global";

//Display a global variable
function GlobalScope()
{
    document.getElementById("GlobalScope").innerHTML = x;
}

//Display an internal variable
function InternalScope()
{
    var y = "internal";
    document.getElementById("InternalScope").innerHTML = y;
}

//Display an internal variable
function ErrorFunction()
{
    document.getElementById("ErrorFunction").innerHTML = y;
}

//If the current time is less than 17, it prints out "Good afternoon"...
//...otherwise, it prints out "Good evening".
function Time()
{
    if(new Date().getHours() < 17)
    {
        document.getElementById("Time").innerHTML = "Good afternoon!";
    }
    else
    {
        document.getElementById("Time").innerHTML = "Good evening!";
    }
}

//Display pound
function Pound()
{
    var pound = 380;
    if(pound < 200)
    {
        document.getElementById("Pound").innerHTML = pound + " is light Weight";
    }
    else
    {
        document.getElementById("Pound").innerHTML = pound + " LB: LIGHT WEIGHT BABY!!! - Ronnie Coleman";
    }
}

//Display a little message if you pass or dont with the exam result
function Exam_Function()
{
    var examResult;
    examResult = document.getElementById("ExamResult").value;
    if(examResult >= 70)
    {
        document.getElementById("Exam").innerHTML
            = "Congratulations, you pass the exam!";
    }
    else
    {
        document.getElementById("Exam").innerHTML
            = "You need to study more to pass next exam!";
    }
}

//Depending on your age, it display your availability to vote or not
function AgeFunction()
{
    Age = document.getElementById("Age").value;
    if(Age >= 18)
    {
        Vote = "You are old enough to vote!";
    }
    else
    {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("HowOldAreYou").innerHTML = Vote;
}

//Depending on your current time, it would tell you if its morning, afternoon, or evening.
function Time_Function()
{
    var time = new Date().getHours();
    var reply;

    if((time < 12) == (time > 0))
    {
        reply = "It's morning time!";
    }
    else if((time >= 12) == (time < 18))
    {
        reply = "It's afternoon time!";
    }
    else
    {
        reply = "It's evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = reply;
}










