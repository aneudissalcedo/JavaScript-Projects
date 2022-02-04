//The typeof indicates, what data type will be use/ask in the program.
document.write(typeof("10"));

//Coercion
document.write("10"+5);

//NaN (Not a Number)
function NaNShow(){
    document.getElementById("NaN").innerHTML = 0/0;
}

//Display true if its NaN
function YesNaNShow(){
    document.getElementById("YesNaN").innerHTML = isNaN(25/5);
}

//Display false if its NaN
function NoNaNShow(){
    document.getElementById("NoNaN").innerHTML = isNaN("0/0");
}

//Display "infinity"
function PositiveInfinity(){
    document.getElementById("PositiveInfinity").innerHTML = 2e310;
}

//Display "-infinity"
function NegativeInfinity(){
    document.getElementById("NegativeInfinity").innerHTML = -2e310;
}

//Display true using logic operation
function Boolean(){
    document.getElementById("Boolean").innerHTML = ((5 < 3) || (5 < 7));
}

//Display false using double equal sign
function DoubleEqual(){
    document.getElementById("DoubleEqual").innerHTML = (6 == 5);
}

//Display true using triple equal sign, matching data type and value
function TripleEqual_01(){
    document.getElementById("TripleEqual_01").innerHTML = (10 === 10);
}

//Display false using triple equal sign, different data type and value
function TripleEqual_02(){
    document.getElementById("TripleEqual_02").innerHTML = ("AS" === 8);
}

//Display false using triple equal sign, different data type but same value
function TripleEqual_03(){
    document.getElementById("TripleEqual_03").innerHTML = ("10" === 10);
}

//Display false using triple equal sign, same data type but different value
function TripleEqual_04(){
    document.getElementById("TripleEqual_04").innerHTML = (10 === 8);
}

//Display true using AND operator
function AND_Operator_True(){
    document.getElementById("AND_Operator_True").innerHTML = ((10 > 8) && (3 < 4));
}

//Display false using AND operator
function AND_Operator_False(){
    document.getElementById("AND_Operator_False").innerHTML = ((10 > 8) && (3 > 4));
}

//Display true using OR operator
function OR_Operator_True(){
    document.getElementById("OR_Operator_True").innerHTML = ((10 > 8) || (3 > 4));
}

//Display false using OR operator
function OR_Operator_False(){
    document.getElementById("OR_Operator_False").innerHTML = ((10 < 8) || (3 > 4));
}

//Display true using NOT operator
function NOT_Operator_True(){
    document.getElementById("NOT_Operator_True").innerHTML = !(5 == 7);
}

//Display false using NOT operator
function NOT_Operator_False(){
    document.getElementById("NOT_Operator_False").innerHTML = !(10 > 8);
}











