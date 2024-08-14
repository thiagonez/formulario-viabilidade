// Função para adicionar uma nova linha a uma tabela
function addRow(tableId) {
    let table = document.getElementById(tableId);
    let newRow = table.insertRow(-1); // Insere a nova linha no final da tabela
    let lastRow = table.rows[table.rows.length - 1];
    let cols = lastRow.cells.length;

    // Copia os valores das células da última linha como referência
    for (let i = 0; i < cols; i++) {
        let cell = newRow.insertCell(i);
        let inputElement = lastRow.cells[i].querySelector('input, select');
        
        if (inputElement) {
            if (inputElement.tagName === 'SELECT') {
                // Cria um novo <select> com as mesmas opções da linha anterior
                cell.innerHTML = inputElement.outerHTML;
            } else {
                // Cria um novo <input> com o mesmo nome e valor da linha anterior
                cell.innerHTML = `<input type="${inputElement.type}" name="${inputElement.name}" value="${inputElement.value}">`;
            }
        }
    }
}}

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
