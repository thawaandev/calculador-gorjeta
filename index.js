function calculateTip(event) {
    event.preventDefault();
    let valor = document.getElementById('valor').value;
    let servico = document.getElementById('ServiceQ').value;
    let clientes = document.getElementById('clientes').value;

    if(valor == '' | servico == 0) {
        alert('Por favor, preencha os valores.');
        return;
    }

    if(clientes == '' | clientes <= 1) {
        clientes = 1;
        document.getElementById('cada').style.display = "none"
    } else {
        document.getElementById('cada').style.display = "block"
    }

    let total = (valor * servico) / clientes;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}   

document.getElementById('totalTip').style.display = "none";
document.getElementById('cada').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);