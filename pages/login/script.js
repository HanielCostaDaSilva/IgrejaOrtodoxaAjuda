document.getElementById('loginForm').addEventListener('submit', handleEvent);

function handleEvent(event){
    event.preventDefault();
    login(email.value, password.value);
    alert("Seja bem vindo! "+getLoggedInUser().nome+ "!")
    window.location.href = '../../index.html'
}

document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('password').type = 'text';
  });
  
  document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('password').type = 'password';
  });
  
  document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('password').type = 'password';
  });