// Recuperar o usuário logado do localStorage
const loggedInUser = getLoggedInUser();
console.log(loggedInUser);
// Exibir as informações do usuário na página
if (loggedInUser) {
    document.getElementById('email').textContent = loggedInUser.email;
    document.getElementById('name').textContent = loggedInUser.nome;
    document.getElementById('idade').textContent = loggedInUser.idade;
    document.getElementById('endereco').textContent = loggedInUser.endereco;
    document.getElementById('religiao').textContent = loggedInUser.religiao;
    document.getElementById('ideologiaPolitica').textContent = loggedInUser.ideologiaPolitica;
    document.getElementById('profissao').textContent = loggedInUser.profissao;
    document.getElementById('numeroFilhos').textContent = loggedInUser.numeroFilhos;
    document.getElementById('rendaFamiliar').textContent = loggedInUser.rendaFamiliar;
    document.getElementById('grauFormacao').textContent = loggedInUser.grauFormacao;
}