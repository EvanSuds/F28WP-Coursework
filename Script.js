function formValidation() {
  var x = document.forms["usernameForm"]["Username"].value;
  if (x.length < 3 || x.length > 12) {
    alert("Username must be between 3 and 12 letters long");
    return false;
  }
}
