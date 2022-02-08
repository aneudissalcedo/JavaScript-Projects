//Validate the form
function ValidateForm()
{
    let fname = document.forms["form"]["fname"].value;
    let lname = document.forms["form"]["lname"].value;

    //If the given name is empty...
    if(fname == "")
    {
        //...ask the user to fill in the name.
        alert("First Name must be filled out to proceed");
        return false;
    }
    else if(lname == "")
    {
        alert("Last Name must be filled out to proceed");
        return false;
    }
}
















