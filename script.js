// Função para adicionar uma nova linha a uma tabela
function addRow(tableId) {
    let table = document.getElementById(tableId);
    let lastRow = table.rows[table.rows.length - 1];
    let newRow = table.insertRow(-1);

    // Copia o conteúdo HTML da última linha para a nova linha
    newRow.innerHTML = lastRow.innerHTML;

    // Se desejar adicionar algum valor padrão ou específico, pode fazer isso aqui.
    // Por exemplo:
    // let inputs = newRow.querySelectorAll('input');
    // inputs.forEach(input => input.value = '');

    // Atualiza os nomes dos inputs na nova linha para evitar duplicação de nomes
    let inputs = newRow.querySelectorAll('input');
    inputs.forEach((input, index) => {
        input.name = input.name.replace(/\d*$/, '') + (table.rows.length - 1);
    });
}

// Função para rolar até a seção do formulário
function scrollToForm() {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}

// Função para coletar dados da tabela
function getTableData(tableId) {
    let table = document.getElementById(tableId);
    let rows = table.getElementsByTagName('tr');
    let data = [];

    for (let i = 1; i < rows.length; i++) { // Começa a partir da linha 1 para pular o cabeçalho
        let cells = rows[i].getElementsByTagName('td');
        let rowData = [];
        for (let j = 0; j < cells.length; j++) {
            rowData.push(cells[j].getElementsByTagName('input')[0].value);
        }
        data.push(rowData);
    }

    return data;
}

// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById('diagnosticForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Coleta dados das tabelas
    data.investmentTable = getTableData('investment-table');
    data.pricingTable = getTableData('pricing-table');
    data.expenseTable = getTableData('expense-table');

    fetch('https://script.google.com/macros/s/AKfycbwkD5kZXC-u_ENT1U1tdNBlTuOyr0WHbPxEpYVzgtOU99IJinWw39Niu4CVZMh5ONIExw/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert('Formulário enviado com sucesso!');
        this.reset(); // Opcional: limpa o formulário após envio
    })
    .catch(error => {
        console.error('Erro ao enviar formulário:', error);
        alert('Houve um erro ao enviar o formulário.');
    });
});
