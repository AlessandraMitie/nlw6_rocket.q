const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
// o js vai dentro do sqlite e vai buscar somente o que for "open" e vai armazenar nessa variável
// open vai servir para fazer a conexão com o banco de dados

module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite',
        // rocketq.sqlite é o nome do banco de dados
        driver: sqlite3.Database,
    });
