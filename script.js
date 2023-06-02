function validarFormulario() {
var campoA = parseInt(document.getElementById('campoA').value);
var campoB = parseInt(document.getElementById('campoB').value);
var mensagem = document.getElementById('mensagem');

if (campoB > campoA) {
    mensagem.innerHTML = 'Formulário válido! Número B é maior que o número A.';
    mensagem.classList.add('green');
    mensagem.classList.remove('red');
} else {
    mensagem.innerHTML = 'Formulário inválido! Número B deve ser maior que o número A.';
    mensagem.classList.add('red');
    mensagem.classList.remove('green');
}

// Limpar os campos do formulário
document.getElementById('campoA').value = '';
document.getElementById('campoB').value = '';
}
  