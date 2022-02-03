//Dictionary object
function Dictionary(){
    //Animal is the object dictionary...
    //...the left side are the keys, or some representation...
    //...of the Animal object.
    //...the right side are the values, it holds the actual data...
    //...for the keys.
    var Animal = {
        Species: "Cat",
        Color: "Black",
        Breed: "Panthera",
        Age: 13,
        Sound: "Gwaarrrrr"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

//Dictionary object
function DictionaryTwo(){
    var Car = {
        Model: "Toyota",
        Color: "Gray",
        Miles: 900,
        Sound: "Bbrrmm"
    };
    delete Car.Model; //This line delete the data of the model of the car

    //The output will show an undefined result since the model of the car is empty
    document.getElementById("DictionaryTwo").innerHTML = Car.Model;
}














































