/* Estilos Básicos */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Estilo do Menu */
header {
    background: #1c1c1c;
    padding: 10px 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.logo {
    color: #fff;
    font-size: 24px;
}

.menu {
    list-style: none;
}

.menu li {
    display: inline-block;
    margin-left: 20px;
}

.menu a {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
}

.menu a:hover {
    background: #4CAF50;
    border-radius: 4px;
}

/* Estilos das Seções */
section {
    padding: 50px 20px;
}

#diagnostico {
    background: url('diagnostico-bg.jpg') no-repeat center center/cover;
    color: #fff;
    text-align: center;
}

#diagnostico h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

#diagnostico p {
    font-size: 18px;
    margin-bottom: 30px;
}

.btn {
    background: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
}

.btn:hover {
    background: #45a049;
}

/* Seção de Soluções */
#solucoes .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
}

.solucao {
    flex: 1;
    margin: 20px;
    min-width: 250px;
}

#solucoes h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 32px;
}

/* Seção Sobre */
#sobre {
    background: #f4f4f4;
    text-align: center;
}

#sobre h2 {
    margin-bottom: 20px;
}

/* Seção de Contato */
#contato .container {
    max-width: 600px;
    margin: auto;
}

#contact-form {
    display: flex;
    flex-direction: column;
}

#contact-form label {
    margin-bottom: 10px;
    font-weight: bold;
}

#contact-form input,
#contact-form textarea {
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

#contact-form button {
    padding: 10px;
    background: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: bold;
}

#contact-form button:hover {
    background: #45a049;
}

/* Rodapé */
footer {
    text-align: center;
    padding: 20px 0;
    background: #1c1c1c;
    color: #fff;
}

/* Responsividade */
@media (max-width: 768px) {
    nav ul {
        display: block;
        text-align: center;
    }

    .solucao {
        margin: 10px 0;
    }
}
