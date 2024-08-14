// Função para adicionar uma nova linha a uma tabela
function addRow(tableId) {
    let table = document.getElementById(tableId);
    let newRow = table.insertRow(-1);
    let cols = table.rows[0].cells.length;

    for (let i = 0; i < cols; i++) {
        let cell = newRow.insertCell(i);
        let inputType = (i === 0) ? "text" : "number"; // Tipo de input: texto para a primeira coluna, número para as outras
        let inputName = `${tableId}-item`; // Nome dos inputs
        if (tableId === 'pricing-table' && i === 4) {
            // Para a tabela de preços, a célula de tipo de cliente deve ser um select
            inputName = `${tableId}-client-type`;
            cell.innerHTML = `
                <select name="${inputName}" required>
                    <option value="" disabled selected hidden>Selecione o Tipo de Cliente</option>
                    <option value="Pessoa Física">Pessoa Física</option>
                    <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                </select>
            `;
        } else if (tableId === 'pricing-table' && i === 6) {
            // Para a tabela de preços, a célula de frequência de vendas deve ser um select
            inputName = `${tableId}-sale-frequency`;
            cell.innerHTML = `
                <select name="${inputName}" required>
                    <option value="" disabled selected hidden>Selecione a Frequência</option>
                    <option value="Diária">Diária</option>
                    <option value="Semanal">Semanal</option>
                    <option value="Mensal">Mensal</option>
                    <option value="Anual">Anual</option>
                </select>
            `;
        } else if (tableId === 'pricing-table' && i === 5) {
            // Para a tabela de preços, a célula de tipo de receita deve ser um select
            inputName = `${tableId}-revenue-type`;
            cell.innerHTML = `
                <select name="${inputName}" required>
                    <option value="" disabled selected hidden>Selecione o Tipo de Receita</option>
                    <option value="Vendas de Produtos">Vendas de Produtos</option>
                    <option value="Vendas de Serviços">Vendas de Serviços</option>
                    <option value="Assinatura">Assinatura</option>
                    <option value="Taxa de Uso de Produto">Taxa de Uso de Produto</option>
                    <option value="Propaganda">Propaganda</option>
                    <option value="Aluguel">Aluguel</option>
                    <option value="Licença">Licença</option>
                    <option value="Outro Tipo">Outro Tipo</option>
                </select>
            `;
        } else {
            cell.innerHTML = `<input type="${inputType}" name="${inputName}">`;
        }
    }
}

// Função para rolar até a seção do formulário
function scrollToForm() {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}

// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById('diagnosticForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

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
