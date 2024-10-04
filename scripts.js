document.getElementById('formularioFinanceiro').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar recarregar a página

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
        credor: formData.get('credor'),
        saldoDivida: formData.get('saldoDivida'),
        valorParcela: formData.get('valorParcela'),
        quantParcelas: formData.get('quantParcelas'),
        jurosMensal: formData.get('jurosMensal'),
        ativosImobilizados: formData.get('ativosImobilizados'),
        passivosDividas: formData.get('passivosDividas'),
        rendaAposentadoria: formData.get('rendaAposentadoria'),
        investimentoAtual: formData.get('investimentoAtual'),
        investimentoMensal: formData.get('investimentoMensal')
    };

    fetch('https://script.google.com/macros/s/AKfycbyHEXk1Rbr_em6P3DS5xQiwEE7vZhSuOCqx-YP165rK7Coof-iD_xcI-U9wBBqeuVrE7Q/exec', {
        method: 'POST',
        body: new URLSearchParams(data),
    })
    .then(response => response.text())
    .then(result => {
        alert('Dados enviados com sucesso!');
        window.location.href = 'sucesso.html';
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
        alert('Erro ao enviar. Tente novamente.');
    });
});
