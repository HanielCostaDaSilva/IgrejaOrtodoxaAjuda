const storedAdmins = JSON.parse(localStorage.getItem('admins')) || [];
const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

const allUsers = [...storedAdmins, ...storedUsers];

function populateTable() {
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';

    allUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>${user.idade}</td>
            <td>${user.endereco}</td>
            <td>${user.profissao}</td>
            <td>${user.numeroFilhos}</td>
            <td>${user.rendaFamiliar}</td>
            <td>${user.grauFormacao}</td>
        `;

        row.classList.add(`id${index + 1}`);
        row.classList.add('linha');

        // Adiciona um evento de clique à célula para abrir o modal
        row.addEventListener('click', () => openUserModal(user));

        // Adiciona eventos de clique aos botões Editar e Remover
        const btnEditar = document.createElement('button');
        btnEditar.innerHTML = '<i class="fa-solid fa-pencil"></i>';
        btnEditar.classList.add('btn', 'btn-warning');
        btnEditar.addEventListener('click', (event) => {
            event.stopPropagation();
            openEditModal(user);
        });

        const btnRemover = document.createElement('button');
        btnRemover.innerHTML = '<i class="fa-solid fa-x"></i>';
        btnRemover.classList.add('btn', 'btn-danger');
        btnRemover.addEventListener('click', (event) => {
            event.stopPropagation();
            removeUser(user, row);
        });

        const btnBox = document.createElement('div');
        btnBox.classList.add('btn-box');
        btnBox.appendChild(btnEditar);
        btnBox.appendChild(btnRemover);

        row.appendChild(btnBox);

        tableBody.appendChild(row);
    });
}
//função para abri o modal
function openUserModal(user) {
    const modalUserInfo = document.getElementById('modalUserInfo');
    modalUserInfo.innerHTML = `
        <p><strong>Nome:</strong> ${user.nome}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Idade:</strong> ${user.idade}</p>
        <p><strong>Endereço:</strong> ${user.endereco}</p>
        <p><strong>Profissão:</strong> ${user.profissao}</p>
        <p><strong>Número de Filhos:</strong> ${user.numeroFilhos}</p>
        <p><strong>Renda Familiar:</strong> ${user.rendaFamiliar}</p>
        <p><strong>Grau de Formação:</strong> ${user.grauFormacao}</p>
    `;

    // Use a função do Bootstrap para mostrar o modal
    const userModal = new bootstrap.Modal(document.getElementById('userModal'));
    userModal.show();
}

// Função para remover um usuário
function removeUser(user, row) {
    const confirmRemoval = confirm('Tem certeza que deseja remover este usuário?');

    if (confirmRemoval) {
        const userIndex = allUsers.indexOf(user);
        const adminIndex = storedAdmins.indexOf(user);
        const normalUserIndex = storedUsers.indexOf(user);
        
        
        allUsers.splice(userIndex, 1);
        
        if (user.admin) {
            console.log(user);
            storedAdmins.splice(adminIndex, 1);
        }
        
        else {
            console.log(user);
            console.log("Normaluser");
            storedUsers.splice(normalUserIndex, 1);
        }
        updateLocalStorage(user.admin);
        row.remove();
    }
}

// Função para abrir o modal de edição
function openEditModal(user) {
    // Preencha o formulário de edição com as informações do usuário
    document.getElementById('editForm').reset(); // Limpa o formulário
    document.getElementById('editNome').value = user.nome;
    document.getElementById('editIdade').value = user.idade;
    document.getElementById('editEndereco').value = user.endereco;
    document.getElementById('editProfissao').value = user.profissao;
    document.getElementById('editNumeroFilhos').value = user.numeroFilhos;
    document.getElementById('editRendaFamiliar').value = user.rendaFamiliar;
    document.getElementById('editGrauFormacao').value = user.grauFormacao;

    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
}

// Função para atualizar o localStorage com a lista de usuários
function updateLocalStorage(ehadmin) {
    if (ehadmin)
        localStorage.setItem('admins', JSON.stringify(storedAdmins));
    else {
        localStorage.setItem('users', JSON.stringify(storedUsers))
    }
}
// Chamar a função para preencher a tabela ao carregar a página
populateTable();
