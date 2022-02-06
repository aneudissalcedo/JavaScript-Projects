// A second countdown method
function Countdown()
{
    var seconds = document.getElementById("seconds").value;

    function tick()
    {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //1000 represent millisecond (1 second)
        if(seconds == -1)
        {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

// Global variables
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function arrowSlides(n)
{
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slideIndex.length}
    
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    
    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the corresponding slide image
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}






























