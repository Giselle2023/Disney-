const cadastroName = document.getElementById('cadastroName');
const cadastroEmail = document.getElementById('cadastroEmail');
const cadastroSenha = document.getElementById('cadastroSenha');
const cadastroConfirmarSenha = document.getElementById('cadastroConfirmaSenha')
const guardarSenha = cadastroSenha.value;
const nomeUsuario = cadastroName.value
function checarSenha(a, b) {
    return a === b
}

function testarLetra(palavra, letra) {
    return palavra.indexOf(letra) !== -1
}

function cadastro() {
    const senhaAtual = checarSenha(guardarSenha, cadastroConfirmarSenha.value);
    if (senhaAtual !== true || guardarSenha.lenght == 0) {
        console.log('erro verifique se está correto')
    }

    const emailOficial = testarLetra(cadastroEmail.value,'gmail');
    if (emailOficial !== true) {
        console.log('erro')
    }

}



//console.log(checarSenha(cadastroSenha, cadastroConfirmarSenha))