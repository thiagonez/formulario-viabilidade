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





document.getElementById('formularioFinanceiro').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar recarregar a página ao enviar o formulário

    // Coletar os dados do formulário
    const formData = new FormData(e.target);
    const data = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        salario: formData.get('salario'),
        decimoTerceiro: formData.get('decimoTerceiro'),
        dividendos: formData.get('dividendos'),
        aluguel: formData.get('aluguel'),
        energia: formData.get('energia'),
        internet: formData.get('internet'),
        fundosInvestimentos: formData.get('fundosInvestimentos'),
        poupanca: formData.get('poupanca'),
        ativosImobilizados: formData.get('ativosImobilizados'),
        passivosDividas: formData.get('passivosDividas'),
        rendaAposentadoria: formData.get('rendaAposentadoria'),
        investimentoAtual: formData.get('investimentoAtual'),
        investimentoMensal: formData.get('investimentoMensal'),

        // Dívidas
        credor1: formData.get('credor1'),
        saldoDivida1: formData.get('saldoDivida1'),
        jurosMensal1: formData.get('jurosMensal1'),
        valorParcela1: formData.get('valorParcela1'),
        parcelasRestantes1: formData.get('parcelasRestantes1'),

        credor2: formData.get('credor2'),
        saldoDivida2: formData.get('saldoDivida2'),
        jurosMensal2: formData.get('jurosMensal2'),
        valorParcela2: formData.get('valorParcela2'),
        parcelasRestantes2: formData.get('parcelasRestantes2'),

        // Repita isso até Dívida 10
        // credor3 a credor10...
    };

    // Enviar os dados via POST para o Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbyHEXk1Rbr_em6P3DS5xQiwEE7vZhSuOCqx-YP165rK7Coof-iD_xcI-U9wBBqeuVrE7Q/exec', {
        method: 'POST',
        body: new URLSearchParams(data),
    })
    .then(response => response.text())
    .then(result => {
        alert('Dados enviados com sucesso!');
        console.log(result);
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
        alert('Houve um erro ao enviar os dados. Tente novamente.');
    });
});

