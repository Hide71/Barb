
// Função para calcular entradas, saídas e total
function atualizarBalanco() {
    const rows = document.querySelectorAll('#data-table tbody tr');
    let totalEntradas = 0;
    let totalSaidas = 0;

    rows.forEach(row => {
        const valorCell = row.cells[1].innerText; // Obter o valor da coluna
        const valor = parseFloat(valorCell.replace('R$', '').replace('.', '').replace(',', '.'));

        if (valor > 0) {
            totalEntradas += valor; // Valores positivos são entradas
        } else {
            totalSaidas += Math.abs(valor); // Valores negativos são saídas
        }
    });

    const totalGeral = totalEntradas - totalSaidas;

    // Atualiza os displays
    document.getElementById('incomeDisplay').innerText = `R$ ${totalEntradas.toFixed(2).replace('.', ',')}`;
    document.getElementById('expenseDisplay').innerText = `R$ ${totalSaidas.toFixed(2).replace('.', ',')}`;
    document.getElementById('totalDisplay').innerText = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
}
 // Modal
 const modal = document.getElementById("modal");
 const btn = document.getElementById("abrirModal");
 const span = document.getElementById("fecharModal");

 // Quando o usuário clicar no botão, abre o modal
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // Quando o usuário clicar no "x", fecha o modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // Quando o usuário clicar fora do modal, fecha-o
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

// Chama a função ao carregar a página
window.onload = function() {
    atualizarBalanco();
};
// Modal de edição
const modalEdit = document.getElementById("modalEdit");
const btnEdit = document.querySelectorAll(".abrirModalEdit");
const spanEdit = document.getElementById("fecharModalEdit");

// Para cada botão de editar, abre o modal com os dados preenchidos
btnEdit.forEach(button => {
button.onclick = function() {
// Pegue os dados da transação
const descricao = button.getAttribute("data-descricao");
const valor = button.getAttribute("data-valor");
const data = button.getAttribute("data-data");
const id = button.getAttribute("data-id");

// Preencha os campos do formulário de edição
document.getElementById("editDescricao").value = descricao;
document.getElementById("editValor").value = valor;
document.getElementById("editData").value = data;

// Altere a URL do formulário de edição para incluir o ID da transação
document.getElementById("editForm").action = `/transacao_edit/${id}/`;

// Mostre o modal
modalEdit.style.display = "block";
}
});

// Quando o usuário clicar no "x", fecha o modal de edição
spanEdit.onclick = function() {
modalEdit.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha-o
window.onclick = function(event) {
if (event.target == modalEdit) {
modalEdit.style.display = "none";
}
}
// Atualiza o ano de copyright automaticamente
document.getElementById('anoAtual').innerText = new Date().getFullYear();

