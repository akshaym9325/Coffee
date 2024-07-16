function validateForm() {
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var people = document.getElementById('people').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Fullname validation
    // empty name
    fname = document.getElementById("fname").value;
    if (fname == "") {
        document.getElementById("umsg").innerHTML = "Please enter username";
        document.getElementById("fname").style.border = "2px solid red";
        return false;
    }
    // name length
    if (fname.length < 6 || fname.length > 10) {
        document.getElementById("umsg").innerHTML = "Length must be between 6-10";
        document.getElementById("fname").style.border = "2px solid red";
        return false;
    }
    // only character / number is not allowed
    flag = 0;
    for (i = 0; i < fname.length; i++) {
        if (fname.charCodeAt(i) >= 48 && fname.charCodeAt(i) <= 57) {
            flag = 1;
        }
    }
    if (flag == 1) {
        document.getElementById("umsg").innerHTML = "Number is not allowed in UserName";
        document.getElementById("fname").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("umsg").innerHTML = "";
        document.getElementById("fname").style.border = "2px solid green";
    }



    // email validation
    //empty 
    email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("emsg").innerHTML = "Please enter email";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    }

    //must contain @
    flag5 = 0;
    for (i = 0; i < email.length; i++) {
        if (email.charCodeAt(i) == 64) {
            flag5 = 1;
        }
    }
    if (flag5 == 0) {
        document.getElementById("emsg").innerHTML = "Must contain @";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    }

    // . needed at last 3/4 index
    if (email.charAt(email.length - 3) != "." && email.charAt(email.length - 4) != ".") {
        document.getElementById("emsg").innerHTML = ". required at last 3/4";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("emsg").innerHTML = "";
        document.getElementById("email").style.border = "2px solid green";
    }



    // mobile validation
    // empty mobile
    mobile = document.getElementById("mobile").value;
    if (mobile == "") {
        document.getElementById("mmsg").innerHTML = "Please enter mobile number";
        document.getElementById("mobile").style.border = "2px solid red";
        return false;
    }

    // only number / character is not allowed  eg; 12345,ak12356
    flag4 = 0;
    for (i = 0; i < mobile.length; i++) {
        if (mobile.charCodeAt(i) < 48 || mobile.charCodeAt(i) > 57) {
            flag4 = 1;
        }
    }
    if (flag4 == 1) {
        document.getElementById("mmsg").innerHTML = "please enter only numbers";
        document.getElementById("mobile").style.border = "2px solid red";
        return false;
    }

    // Number should be 10 Digit
    if (mobile.length != 10) {
        document.getElementById("mmsg").innerHTML = "please enter 10 digit number";
        document.getElementById("mobile").style.border = "2px solid red";
        return false;
    }

    // number must start with 6,7,8,9
    if (mobile.charCodeAt(0) >= 48 && mobile.charCodeAt(0) <= 53) {
        document.getElementById("mmsg").innerHTML = "Number must start with 6,7,8,9";
        document.getElementById("mobile").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("mmsg").innerHTML = "";
        document.getElementById("mobile").style.border = "2px solid green";
    }

    

    if (isNaN(people) || people <= 0) {
        alert("Please enter a valid number of people");
        return false;
    }

    return true;
}