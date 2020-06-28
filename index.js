const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 3000;
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Definindo rotas
const router = express.Router();
router.get('/',(req, res) => res.json({ message: 'Funcionando!'}));
app.use('/', router);
//Inicia o servidor
app.listen(porta);
console.log('API Funfando Carai!');

//Faz a conexão com o banco
function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host     : 'mysql669.umbler.com',
        port     : 41890,
        user     : 'livsundev',
        password : '#livsundev',
        database : 'dbbankbeer'
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }
//SELECT * FROM
  router.get('/clientes', (req, res) =>{
    execSQLQuery('SELECT * FROM Clientes', res);
})
//SELECT COM PARAMETRO ID
router.get('/clientes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Clientes' + filter, res);
})
//DELETANDO
router.delete('/clientes/:id', (req, res) =>{
    execSQLQuery('DELETE FROM Clientes WHERE ID=' + parseInt(req.params.id), res);
})
//ADICIONADO
router.post('/clientes', (req, res) =>{
    const nome = req.body.nome.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    execSQLQuery(`INSERT INTO Clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
});
//ALTERANDO
router.patch('/clientes/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0,150);
    const cpf = req.body.cpf.substring(0,11);
    execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
})