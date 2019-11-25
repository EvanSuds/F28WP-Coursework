// JavaScript source code

function SignUp() {

    var socket = io();

    socket.emit('newUser', {name: document.getElementById("userName").value, pws: document.getElementById("userPW").value});
    alert("You have officially signed up");
}
