function authenticate() {
    var authorised;

    //get input values
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(username, password);
    //check to see if the password and username match
    if (username == "embloyee@gmail.com" && password == "pass12345") {
        authorised = true;
    } else { // username or password do not match
        authorised = false;
        //alert user
        alert("Sorry, password is incorrect.");
    }
    //return result
    return authorised;
}