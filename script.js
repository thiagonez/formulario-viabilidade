// Função para adicionar uma nova linha à Tabela de Precificação
function addRow(tableId) {
    let table = document.getElementById(tableId);
    let newRow = table.insertRow(-1); // Adiciona uma nova linha no final da tabela
    let cols = table.rows[0].cells.length; // Obtém o número de colunas

    for (let i = 0; i < cols; i++) {
        let cell = newRow.insertCell(i);

        // Define o conteúdo de cada célula com base na coluna
        if (i === 0) { 
            cell.innerHTML = '<input type="text" name="pricing-item" required>';
        } else if (i === 1) { 
            cell.innerHTML = '<input type="number" name="pricing-price">';
        } else if (i === 2) { 
            cell.innerHTML = '<input type="number" name="pricing-cost" required>';
        } else if (i === 3) { 
            cell.innerHTML = '<input type="number" name="pricing-taxes">';
        } else if (i === 4) { 
            cell.innerHTML = '<input type="text" name="pricing-client-type">';
        } else if (i === 5) { 
            cell.innerHTML = `
                <select name="pricing-revenue-type" required>
                    <option value="Vendas de Produtos">Vendas de Produtos</option>
                    <option value="Vendas de Serviços">Vendas de Serviços</option>
                    <option value="Assinatura">Assinatura</option>
                    <option value="Taxa de Uso de Produto">Taxa de Uso de Produto</option>
                    <option value="Propaganda">Propaganda</option>
                    <option value="Aluguel">Aluguel</option>
                    <option value="Licença">Licença</option>
                    <option value="Outro Tipo">Outro Tipo</option>
                </select>`;
        } else if (i === 6) { 
            cell.innerHTML = `
                <select name="pricing-sale-frequency" required>
                    <option value="Diária">Diária</option>
                    <option value="Semanal">Semanal</option>
                    <option value="Mensal">Mensal</option>
                    <option value="Anual">Anual</option>
                </select>`;
        } else if (i === 7) { 
            cell.innerHTML = '<input type="number" name="pricing-projection">';
        }
    }
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
            let input = cells[j].querySelector('input, select');
            if (input) {
                rowData.push(input.value);
            }
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
