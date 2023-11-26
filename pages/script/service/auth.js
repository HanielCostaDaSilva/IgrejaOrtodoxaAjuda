// Função para registrar um usuário
function register(
    ehAdministrador,
    email,
    password,
    name,
    age,
    address,
    religion,
    politicalIdeology,
    profession,
    numberOfChildren,
    familyIncome,
    educationLevel
) {
    const user = new User(
        ehAdministrador,
        email,
        password,
        name,
        age,
        address,
        religion,
        politicalIdeology,
        profession,
        numberOfChildren,
        familyIncome,
        educationLevel
    );

    // Obter usuários e administradores do localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedAdmins = JSON.parse(localStorage.getItem('admins')) || [];

    // Verificar se o email já está cadastrado como usuário ou administrador
    const userFound = storedUsers.find(u => u.email === email);
    const adminFound = storedAdmins.find(a => a.email === email);

    if (!userFound && !adminFound) {

        //Regra de negócio, só pode existir 2 administradores no sistema
        if (ehAdministrador){
            if(storedAdmins.length >=2){

                throw new Error("Limite de administradores atingido");
            }
            storedAdmins.push(user);
            localStorage.setItem('admins', JSON.stringify(storedAdmins));
        } else {
            storedUsers.push(user);
            localStorage.setItem('users', JSON.stringify(storedUsers));
        }

        return user;
    } else {
        throw new Error("Usuário ou administrador já cadastrado com esse email.");
    }
}

function isUserRegistered(email) {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedAdmins = JSON.parse(localStorage.getItem('admins')) || [];

    const userFound = storedUsers.find(u => u.email === email);
    const adminFound = storedAdmins.find(a => a.email === email);

    return userFound || adminFound;
}

// Função para realizar login
function login(email, password) {
    
    // Obter usuários e administradores do localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedAdmins = JSON.parse(localStorage.getItem('admins')) || [];

    // Verificar se o email já está cadastrado como usuário ou administrador
    const userFound = storedUsers.find(u => u.email === email);
    const adminFound = storedAdmins.find(a => a.email === email);

    const user = userFound || adminFound;

    if (user) {
        // Verificar a senha
        if (user.senha === password) {
            // Armazenar o usuário logado no localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(user));

            return user;
        } else {
            throw new Error("Senha incorreta. Tente novamente.");
        }
    } else {
        throw new Error("Usuário não encontrado. Verifique o e-mail.");
    }
}

// Função para obter o usuário logado do localStorage
function getLoggedInUser() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    return loggedInUser || null;
}

function loadUserInfo(){
    
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Preencher os elementos HTML com as informações do usuário
        document.getElementById('email').innerText = loggedInUser.email;
        document.getElementById('name').innerText = loggedInUser.nome;
        document.getElementById('idade').innerText = loggedInUser.idade;
        document.getElementById('endereco').innerText = loggedInUser.endereco;
        document.getElementById('religiao').innerText = loggedInUser.religiao;
        document.getElementById('ideologiaPolitica').innerText = loggedInUser.ideologiaPolitica;
        document.getElementById('profissao').innerText = loggedInUser.profissao;
        document.getElementById('numeroFilhos').innerText = loggedInUser.numeroFilhos;
        document.getElementById('rendaFamiliar').innerText = loggedInUser.rendaFamiliar;
        document.getElementById('grauFormacao').innerText = loggedInUser.grauFormacao;
    }
}

// Função para editar informações do usuário
function editUserInfo(email) {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    const storedAdmins = JSON.parse(localStorage.getItem('admins'));
    
    const userFound = storedUsers.find(u => u.email === email);
    if (userFound){
        
    }
    
    const adminFound = storedAdmins.find(a => a.email === email);

    if (loggedInUser) {
        loggedInUser.nome = prompt('Novo Nome:', loggedInUser.nome);
        loggedInUser.idade = prompt('Nova Idade:', loggedInUser.idade);
        loggedInUser.endereco = prompt('Novo Endereço:', loggedInUser.endereco);
        loggedInUser.religiao = prompt('Nova Religião:', loggedInUser.religiao);
        loggedInUser.ideologiaPolitica = prompt('Nova Ideologia Política:', loggedInUser.ideologiaPolitica);
        loggedInUser.profissao = prompt('Nova Profissão:', loggedInUser.profissao);
        loggedInUser.numeroFilhos = prompt('Novo Número de Filhos:', loggedInUser.numeroFilhos);
        loggedInUser.rendaFamiliar = prompt('Nova Renda Familiar:', loggedInUser.rendaFamiliar);
        loggedInUser.grauFormacao = prompt('Novo Grau de Formação:', loggedInUser.grauFormacao);

        // Salvar as informações editadas no localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

        // Atualizar as informações exibidas na página
    }
}


function logout() {
    localStorage.removeItem('loggedInUser');
    location.reload();

}