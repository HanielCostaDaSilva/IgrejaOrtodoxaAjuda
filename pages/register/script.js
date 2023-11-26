
document.getElementById('registerForm').addEventListener('submit', handleEvent);

function handleEvent(event) {

    event.preventDefault();

    const ehAdministrador = userType.value == "admin";

    try {
        result = register(
            ehAdministrador,
            email.value,
            password.value,
            nome.value,
            parseInt(age.value),
            address.value,
            religion.value,
            politicalIdeology.value,
            profession.value,
            parseInt(numberOfChildren.value),
            parseFloat(familyIncome.value),
            educationLevel.value
        )
        sendMessage("Cadastrou!")
        window.location.href = '../../index.html'

    }catch(e) {
        alert(e.message);
    }
}

function sendMessage(message){
    alert(message)
}