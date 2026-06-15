const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração do Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Servir ficheiros estáticos (CSS e JS)
app.use(express.static(path.join(__dirname, 'views/css/')));
app.use(express.static(path.join(__dirname, 'views/js/')));

// Servir imagens estáticas
app.use(express.static(path.join(__dirname, 'views/images/')));

// --- ROTAS DO SITE ---

// Página Inicial
app.get("/", (req, res) => {
    res.render('index');
});

// Página Sobre (com parâmetro ID)
app.get("/sobre/:id", (req, res) => {
    const id = req.params.id;
    res.render("sobre", { id });
});

// Página de Inovações (Projetos)
app.get("/inovacoes", (req, res) => {
    res.render("projetos");
});

// Página de Conectar (Contato)
app.get("/conectar", (req, res) => {
    res.render("contato");
});

// Inicialização do Servidor
app.listen(3000, () => {
    console.log('Servidor AeroGlobe a correr em http://localhost:3000');
});