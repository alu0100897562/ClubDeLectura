'use strict';

// Firebase ya Inicializado en el Login

// PopUp Registro
$(document).ready(function(){
    $('.modal').modal();
});

$('#registro').submit(() => {
    var email = document.getElementById('email-reg').value;
    var password = document.getElementById('password-reg').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        window.location = "./welcome.html";
        // Simulate a mouse click:
        //window.location.href = "./form.html";
        // Simulate an HTTP redirect:
        //window.location.replace("./form.html");
    })
    .catch((error) => {
        // Handle Errors here.
        alert('Error ['+error.code+']: '+error.message);
    });

    /*
    var user = firebase.auth().currentUser;
    if (user) {
      alert(user.email+' is logged in.');
    } else {
        alert('No user is logged in.');
    }
    */
    // Para cancelar el submit
    return false;
});