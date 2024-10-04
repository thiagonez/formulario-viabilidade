// Função para adicionar novas linhas automaticamente na tabela de dívidas
document.addEventListener('DOMContentLoaded', function() {
    const tabelaDividas = document.querySelector('#tabelaDividas tbody');
    
    tabelaDividas.addEventListener('input', function(event) {
        const ultimaLinha = tabelaDividas.lastElementChild;
        const inputsPreenchidos = Array.from(ultimaLinha.querySelectorAll('input')).some(input => input.value !== '');
        
        if (inputsPreenchidos) {
            const novaLinha = ultimaLinha.cloneNode(true);
            novaLinha.querySelectorAll('input').forEach(input => input.value = '');
            tabelaDividas.appendChild(novaLinha);
        }
    });
});

// Simulação da Calculadora de Liberdade Financeira
document.getElementById('calculadoraLiberdade').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const rendaAposentadoria = parseFloat(document.getElementById('rendaAposentadoria').value);
    const investimentoAtual = parseFloat(document.getElementById('investimentoAtual').value);
    const investimentoMensal = parseFloat(document.getElementById('investimentoMensal').value);
    
    if (isNaN(rendaAposentadoria) || isNaN(investimentoAtual) || isNaN(investimentoMensal)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const anosAteAposentadoria = 20; // Exemplo de cálculo para 20 anos
    const rendimentoAnual = 0.06; // Rendimento anual de 6%

    let totalInvestido = investimentoAtual;
    for (let i = 0; i < anosAteAposentadoria; i++) {
        totalInvestido += investimentoMensal * 12;
        totalInvestido += totalInvestido * rendimentoAnual;
    }

    const rendaGerada = totalInvestido * rendimentoAnual;

    if (rendaGerada >= rendaAposentadoria) {
        alert('Parabéns! Você alcançará sua meta de liberdade financeira.');
    } else {
        alert('Você precisará aumentar seus investimentos para atingir a meta.');
    }
});
