// Função para adicionar uma nova linha a uma tabela
function addRow(tableId) {
    let table = document.getElementById(tableId);
    let lastRow = table.rows[table.rows.length - 1];
    let newRow = table.insertRow(-1); // Insere a nova linha no final da tabela
    
    // Copia os valores das células da última linha como referência
    for (let i = 0; i < lastRow.cells.length; i++) {
        let cell = newRow.insertCell(i);
        let lastCell = lastRow.cells[i];
        let inputElement = lastCell.querySelector('input, select');
        
        if (inputElement) {
            if (inputElement.tagName === 'SELECT') {
                // Cria um novo <select> com as mesmas opções da linha anterior
                let newSelect = document.createElement('select');
                newSelect.name = inputElement.name;
                newSelect.innerHTML = inputElement.innerHTML; // Copia as opções
                cell.appendChild(newSelect);
            } else {
                // Cria um novo <input> com o mesmo tipo, nome e valor da linha anterior
                let newInput = document.createElement('input');
                newInput.type = inputElement.type;
                newInput.name = inputElement.name;
                newInput.value = ""; // Limpa o valor para novas entradas
                cell.appendChild(newInput);
            }
        } else {
            // Se não houver input ou select, copia o conteúdo HTML da célula
            cell.innerHTML = lastCell.innerHTML;
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

    console.log('Dados enviados:', data); // Verifique os dados no console

    fetch('https://script.google.com/macros/s/AKfycbwkD5kZXC-u_ENT1U1tdNBlTuOyr0WHbPxEpYVzgtOU99IJinWw39Niu4CVZMh5ONIExw/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Resposta do servidor:', response); // Verifique a resposta no console
        if (!response.ok) {
            throw new Error('Erro na resposta do servidor');
        }
        return response.text();
    })
    .then(result => {
        alert('Formulário enviado com sucesso!');
        this.reset(); // Opcional: limpa o formulário após envio
    })
    .catch(error => {
        console.error('Erro ao enviar formulário:', error);
        alert('Houve um erro ao enviar o formulário.');
    });
});
