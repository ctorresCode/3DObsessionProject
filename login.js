
function login(){
    let username = document.getElementById('username_id').value;
    let password = document.getElementById('password_id').value;
    console.log(username)
    console.log(password);

    if(username == "" && password == ""){
        alert("Existen datos incompletos")
    }
    else if(username.length >= 5 && password.length >= 5){
        window.location.href = "index.html"
        localStorage.setItem('username', JSON.stringify(username));
        localStorage.setItem('password', JSON.stringify(password));
    }
    else{
        alert("Ha ingresado datos no validos");
    }

    /*
    if(username.length >= 5 && password.length >= 5){
        window.location.href = "index.html"
        localStorage.setItem('username', JSON.stringify(username));
        localStorage.setItem('password', JSON.stringify(password));
    }
    else{
        alert("Ha ingresado datos no validos");
    }
        */
}

function register(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email_id').value;
    let identification = document.getElementById('identificationCard_id').value;

    if(username.length >= 5 && password.length >= 5 && email.length >= 5 && identification.length >= 5){
        window.location.href = "login.html"
    }
    else{
        alert("Ha ingresado valores no validos");
    }
}