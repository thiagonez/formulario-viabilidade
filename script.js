document.getElementById('addRowBtn').addEventListener('click', function() {
    const table = document.getElementById('dividasTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td><input type="text" name="credor" placeholder="Credor"></td>
        <td><input type="number" name="saldo" placeholder="Valor"></td>
        <td><input type="number" name="juros" placeholder="Valor"></td>
        <td><input type="number" name="parcela" placeholder="Valor"></td>
    `;
});

// Envio do formulário para o Google Sheets
document.getElementById('financialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());

    fetch('https://script.google.com/macros/s/AKfycbyb22UGgr5nv8v3EpCMDrlnzGp0nDTXVPerHd2-znQa/exec', {
        method: 'POST',
        body: JSON.stringify(formObject),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        this.reset(); // Limpa o formulário
    })
    .catch(error => {
        console.error('Houve um erro ao enviar os dados:', error);
    });
});
