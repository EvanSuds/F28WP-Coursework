// JavaScript source code

function SignUp() {

    var socket = io();

    //Calls newUser in server.js to add new user to database
    socket.emit('newUser', {name: document.getElementById("userName").value, pws: document.getElementById("userPW").value});
    alert("You have officially signed up");
}
