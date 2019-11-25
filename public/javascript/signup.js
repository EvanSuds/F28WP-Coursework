// JavaScript source code

function SignUp() {

    var socket = io();

    socket.on('message', function(data) { //Receive a text message from the server
      console.log(data); //Log ("Communicating with the server!")
    });

    socket.emit('newUser', {name: document.getElementById("userName").value, pws: document.getElementById("userPW").value});
    alert("You have officially signed up");
}
