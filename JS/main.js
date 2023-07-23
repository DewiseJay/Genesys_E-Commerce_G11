
// SignUp Function

function addData() {
    let full_name = document.getElementById("full_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    

    localStorage.setItem("userName", full_name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    if (full_name != " ")
    {
        if (email != " " && password != " ")
        {
            window.location.assign("sign_in.html");
        }
        else
        {
            alert("Fill your Details");
        }
    }
    else
        {
            alert("Login if you have Account");
        }
}


// Login Function

function checkData() {
    let enterEmail = document.getElementById("email").value;
    let enterPassword = document.getElementById("password").value;
    
    let getEmail = localStorage.getItem("userEmail");
    let getPassword = localStorage.getItem("userPassword");

    if (enterEmail == getEmail)
    {
        if (enterPassword == getPassword)
        {
            window.location.assign("index.html");
        }
        else
        {
            alert("Wrong password");
        }
    }
    else
    {
        alert("Invalid details");
    }
}
 