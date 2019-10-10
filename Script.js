function formValidation() {
  var x = document.forms["usernameForm"]["Username"].value;
  if (x.length < 3) {
    alert("Username must be at least 3 letters long");
    return false;
  }
}
