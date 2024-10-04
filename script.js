document.getElementById("financeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
});

// Função para adicionar uma nova linha na tabela de dívidas
const dividasTable = document.getElementById('dividasTable').querySelector('tbody');
dividasTable.addEventListener('input', function(e) {
    const lastRow = dividasTable.querySelector('tr:last-child');
    const inputs = lastRow.querySelectorAll('input');
    let isFilled = true;
    
    inputs.forEach(input => {
        if (!input.value) {
            isFilled = false;
        }
    });

    if (isFilled) {
        const newRow = lastRow.cloneNode(true);
        newRow.querySelectorAll('input').forEach(input => input.value = '');
        dividasTable.appendChild(newRow);
    }
});
