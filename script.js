// Função para adicionar uma nova linha a uma tabela
function addRow(tableId) {
    let table = document.getElementById(tableId);
    let newRow = table.insertRow(-1);
    let cols = table.rows[0].cells.length;

    for (let i = 0; i < cols; i++) {
        let cell = newRow.insertCell(i);
        if (i === 0) {
            cell.innerHTML = <input type="text" name="${tableId}-item">;
        } else {
            cell.innerHTML = <input type="number" name="${tableId}-value">;
        }
    }
}

// Função para rolar até a seção do formulário
function scrollToForm() {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}






// Função Capital de Terceiros
function toggleCapitalTerceiros() {
    const select = document.getElementById('usaraCapitalTerceiros');
    const capitalTerceirosContainer = document.getElementById('capitalTerceirosContainer');

    if (select.value === 'Sim') {
        capitalTerceirosContainer.style.display = 'block';
    } else {
        capitalTerceirosContainer.style.display = 'none';
    }
}

function addRow(tableId) {
    const table = document.getElementById(tableId);
    const newRow = table.getElementsByTagName('tbody')[0].insertRow();
    const cells = table.rows[1].cells.length; // Número de colunas da tabela
    for (let i = 0; i < cells; i++) {
        const newCell = newRow.insertCell(i);
        newCell.innerHTML = table.rows[1].cells[i].innerHTML; // Copia o conteúdo da segunda linha
    }
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
