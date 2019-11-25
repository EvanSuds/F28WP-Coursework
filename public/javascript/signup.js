// JavaScript source code
function SignUp() {
    socket.emit('newUser', {name: document.getElementById("userName").value, pwd: document.getElementById.getElementById("userPW").value});
    alert("You have officially signed up");
}