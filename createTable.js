
const mysql      = require('mysql');
const conn = mysql.createConnection({
  host     : 'mysql669.umbler.com',
  port     : 41890,
  user     : '',
  password : '',
  database : 'dbbankbeer'
});

conn.connect(function(err){
    if(err) return console.log(err);
    console.log('Conectou!');
    createTable(conn);
    
})

//Cria a tabela no banco de dados
function createTable(conn){

    const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
                "ID int NOT NULL AUTO_INCREMENT,\n"+
                "Nome varchar(150) NOT NULL,\n"+
                "CPF char(11) NOT NULL,\n"+
                "PRIMARY KEY (ID)\n"+
                ");";
    
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela!');
        addRows(conn);
    });
}

//INSERT PARA POPULAR O BANCO
function addRows(conn){
    const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
    const values = [
          ['Denilson Márcio', '12345678901'],
          ['Rafael Palau', '09876543210'],
          ['Sicrano da Silva', '09876543210'],
          ['Fulano de Tal', '12312312399']
        ];
    conn.query(sql, [values], function (error, results, fields){
            if(error) return console.log(error);
            console.log('adicionou registros!');
            conn.end();//fecha a conexão
        });
  }
