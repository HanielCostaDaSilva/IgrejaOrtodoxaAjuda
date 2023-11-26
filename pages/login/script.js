document.getElementById('loginForm').addEventListener('submit', handleEvent);

function handleEvent(event){
    event.preventDefault();
    login(email.value, password.value);
    alert("Seja bem vindo! "+getLoggedInUser().nome+ "!")
    window.location.href = '../../index.html'
}