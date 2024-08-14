// Função para adicionar uma nova linha a uma tabela
function addRow(tableId) {
    let table = document.getElementById(tableId);
    let newRow = table.insertRow(-1);

    // Verifica qual tabela é e insere as células corretamente
    if (tableId === 'pricing-table') {
        // Cria as células de cada coluna para a Tabela de Precificação
        newRow.insertCell(0).innerHTML = '<input type="text" name="pricing-item" required>';
        newRow.insertCell(1).innerHTML = '<input type="number" name="pricing-price" required>';
        newRow.insertCell(2).innerHTML = '<input type="number" name="pricing-cost" required>';
        newRow.insertCell(3).innerHTML = '<input type="number" name="pricing-taxes" required>';
        newRow.insertCell(4).innerHTML = '<input type="text" name="pricing-client-type" required>';
        newRow.insertCell(5).innerHTML = `
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
        newRow.insertCell(6).innerHTML = `
            <select name="pricing-sale-frequency" required>
                <option value="Diária">Diária</option>
                <option value="Semanal">Semanal</option>
                <option value="Mensal">Mensal</option>
                <option value="Anual">Anual</option>
            </select>`;
        newRow.insertCell(7).innerHTML = '<input type="number" name="pricing-projection" required>';
    } else {
        // Caso seja outra tabela, mantenha o comportamento padrão
        let cols = table.rows[0].cells.length;

        for (let i = 0; i < cols; i++) {
            let cell = newRow.insertCell(i);
            if (i === 0) {
                cell.innerHTML = '<input type="text" name="${tableId}-item">';
            } else {
                cell.innerHTML = '<input type="number" name="${tableId}-value">';
            }
        }
    }
}
