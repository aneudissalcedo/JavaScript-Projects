

//Add two numbers together
function AddOperation(){
    //Declaration of variables
    var result = 5 + 3;

    document.getElementById("Math").innerHTML = "5 + 3 = " + result;
}

//Substract two numbers together
function SubOperation(){
    //Declaration of variables
    var result = 4 - 3;

    document.getElementById("SubMath").innerHTML = "4 - 3 = " + result;
}

//Multiply two numbers together
function MultOperation(){
    //Declaration of variables
    var result = 7 * 6;

    document.getElementById("MultMath").innerHTML = "7 * 6 = " + result;
}

//Divide two numbers together
function DivOperation(){
    //Declaration of variables
    var result = 81 / 9;

    document.getElementById("DivMath").innerHTML = "81 / 9 = " + result;
}

//More Math operation
function MoreOperation(){
    var result = (1 + 2) * 10 / 2 - 5;

    document.getElementById("MoreMath").innerHTML
        = "1 plus 2, multiplied by 10, divided in half, and then subtracted by 5 equals "
        + result;
}

//Modulus operation
function ModulusOperation(){
    var result = 25 % 6;

    document.getElementById("ModulusMath").innerHTML
        = "When you divide 25 by 6, you have a remainder of: "+ result;
}

//Negation operation
function NegationOperation(){
    var result = 10;

    document.getElementById("NegationMath").innerHTML = -result;
}

//Increment operation
function IncrementOperation(){
    var result = 4;
    result++
    
    document.getElementById("IncrementMath").innerHTML = "4++ = " + result;
}

//Decrement operation
function DecrementOperation(){
    var result = 4;
    result--
    
    document.getElementById("DecrementMath").innerHTML = "4-- = " + result;
}

//Random operation
window.alert(Math.random().toFixed(2));

//Power operation
document.write("8 to the power of 2 is equal to " + Math.pow(8, 2))









