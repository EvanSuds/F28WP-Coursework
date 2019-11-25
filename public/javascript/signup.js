// JavaScript source code

function SignUp() {
    var x = document.forms["usernameForm"]["Username"].value;
    var letters = /^[0-9a-zA-Z]+$/;

    if (x.length < 3 && x.length > 12) { //Check if length is between 3 and 12 characters
        if(x.value.match(letters)) { //Check if input has no special characters

            var socket = io();
            socket.on('message', function(data) { //Receive a text message from the server
                console.log(data); //Log ("Communicating with the server!")
              });
          
              socket.emit('newUser', {name: document.getElementById("userName").value, pws: document.getElementById("userPW").value});
              alert("You have officially signed up");
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
