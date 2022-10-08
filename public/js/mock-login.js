function authenticate() {
    var authorised;

    //get input values
    var username = $("#email")[0].value;
    var password = $("#password")[0].value;
    console.log(username, password);
    //check to see if the password and username match
    if (username == "employee@gmail.com" && password == "pass12345") {
        authorised = true;
    } else { // username or password do not match
        authorised = false;
        //alert user
        alert("Sorry, password is incorrect.");
    }
    //return result
    return authorised;
}