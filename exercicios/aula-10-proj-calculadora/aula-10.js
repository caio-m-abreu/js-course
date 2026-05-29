let visor = document.getElementById('visor');

function adicionarAoVisor(valor) {
    visor.value += valor;
}

function limparVisor() {
    visor.value = '';
}

function calcular() {
    try {
        visor.value = eval(visor.value);
    } catch (erro) {
        alert('Erro na expressão!');
        limparVisor();
    }
}

function apagarUltimo(){
    visor.value = visor.value.slice(0, -1);
}