//Form validation for the login screen
function formValidation() {
  var x = document.forms["usernameForm"]["Username"].value;
  var letters = /^[0-9a-zA-Z]+$/;

  if (x.length < 3 && x.length > 12) { //Check if length is between 3 and 12 characters
    if(x.value.match(letters)) { //Check if input has no special characters
      return true;
    }
    else {
      alert("Input must be letters and numbers only");
      return false;
    }
  }
  else {
    alert("Username must be between 3 and 12 letters long");
    return false;
  }
}

//Changes password from hidden by spots, to shown in plain text
function showPassword() {
  var field = document.getElementById("userPW");
  if (field.type === "password") {
    field.type = "text";
  }
  else {
    field.type = "password";
  }
}
