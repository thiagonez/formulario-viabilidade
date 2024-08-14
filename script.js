function addRow(tableId) {
    let table = document.getElementById(tableId);
    let newRow = table.insertRow(-1);
    let cols = table.rows[0].cells.length;

    for (let i = 0; i < cols; i++) {
        let cell = newRow.insertCell(i);
        if (i === 0) {
            cell.innerHTML = `<input type="text" name="${tableId}-item">`;
        } else {
            cell.innerHTML = `<input type="number" name="${tableId}-value">`;
        }
    }
}

function scrollToForm() {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("diagnosticForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Simulação do envio para uma planilha Google
    let formData = new FormData(this);
    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log("Dados enviados:", data);
    alert("Formulário enviado com sucesso!");
    
    // Aqui, você pode adicionar o código para enviar para a planilha Google
});
