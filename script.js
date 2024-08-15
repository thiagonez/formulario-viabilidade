$(document).ready(function() {
    // Rolagem suave para as seções ao clicar nos links do menu
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1000); // Tempo de rolagem de 1 segundo
    });

    // Alterar o fundo do menu ao rolar a página
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#navbar').css('background', 'rgba(0, 115, 230, 0.8)');
        } else {
            $('#navbar').css('background', 'rgba(0, 115, 230, 0.9)');
        }
    });
});




// Adiciona mais linhas na Tabela de Investimentos
function addInvestmentRow() {
    const investmentTable = document.getElementById('investmentTable');
    const newRow = document.createElement('div');
    newRow.className = 'investment-row';
    newRow.innerHTML = `
        <label>Item</label>
        <input type="text" name="investmentItem[]" required>
        <label>Valor</label>
        <input type="number" name="investmentValue[]" required>
        <label>Depreciação (%)</label>
        <input type="number" name="investmentDepreciation[]" placeholder="Se aplicável">
    `;
    investmentTable.appendChild(newRow);
}

// Adiciona mais linhas na Tabela de Precificação
function addPricingRow() {
    const pricingTable = document.getElementById('pricingTable');
    const newRow = document.createElement('div');
    newRow.className = 'pricing-row';
    newRow.innerHTML = `
        <label>Produto ou Serviço</label>
        <input type="text" name="pricingProduct[]" required>
        <label>Preço de Venda</label>
        <input type="number" name="pricingPrice[]" required>
        <label>Custo</label>
        <input type="number" name="pricingCost[]" required>
        <label>Impostos (%)</label>
        <input type="number" name="pricingTax[]" required>
        <label>Tipo de Cliente</label>
        <input type="text" name="pricingCustomerType[]" required>
        <label>Tipo de Receita</label>
        <select name="pricingRevenueType[]" required>
            <option value="Vendas de Produtos">Vendas de Produtos</option>
            <option value="Vendas de Serviços">Vendas de Serviços</option>
            <option value="Assinatura">Assinatura</option>
            <option value="Taxa de Uso de Produto">Taxa de Uso de Produto</option>
            <option value="Propaganda">Propaganda</option>
            <option value="Aluguel">Aluguel</option>
            <option value="Licença">Licença</option>
            <option value="Outro Tipo">Outro Tipo</option>
        </select>
        <label>Frequência de Vendas</label>
        <select name="pricingFrequency[]" required>
            <option value="Diária">Diária</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensal">Mensal</option>
            <option value="Anual">Anual</option>
        </select>
        <label>Projeção de Vendas no Ano</label>
        <input type="number" name="pricingProjection[]" required>
    `;
    pricingTable.appendChild(newRow);
}

// Adiciona mais linhas na Tabela de Despesas
function addExpenseRow() {
    const expensesTable = document.getElementById('expensesTable');
    const newRow = document.createElement('div');
    newRow.className = 'expenses-row';
    newRow.innerHTML = `
        <label>Despesa</label>
        <input type="text" name="expenseItem[]" required>
        <label>Valor</label>
        <input type="number" name="expenseValue[]" required>
        <label>Reajuste Anual (%)</label>
        <input type="number" name="expenseAdjustment[]" required>
    `;
    expensesTable.appendChild(newRow);
}

// Envia o formulário
$(document).ready(function () {
    $('#viabilityForm').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwkD5kZXC-u_ENT1U1tdNBlTuOyr0WHbPxEpYVzgtOU99IJinWw39Niu4CVZMh5ONIExw/exec",
            method: "POST",
            data: $(this).serialize(),
            success: function (response) {
                alert("Formulário enviado com sucesso!");
                $('#viabilityForm')[0].reset(); // Reseta o formulário após o envio
            },
            error: function (err) {
                alert("Erro ao enviar o formulário. Tente novamente.");
            }
        });
    });
});
