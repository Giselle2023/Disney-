
const cadastroSenha = document.getElementById('cadastroSenha');
const cadastroConfirmarSenha = document.getElementById('cadastroConfirmaSenha');
const senhaLogin = document.getElementById('password');

let converterSenha1 = Number(cadastroSenha.value)
let converterSenha2 = Number(cadastroConfirmarSenha.value)
let senha;

function cadastro(){
    if(converterSenha1 === converterSenha2){
        senha = '123456'
        //senha = cadastroSenha.value
        console.log(senha)
        return senha
    }
}
    function login(){
       if(senhaLogin.value === senha){
        alert('acesso permitido')
        console.log(senha)
       }

    }





//console.log(checarSenha(cadastroSenha, cadastroConfirmarSenha))