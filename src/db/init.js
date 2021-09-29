const Database = require("./config")

//quem vai iniciar o banco de dados
const initDb = {
    async init(){
        const db = await Database()

        //criar a tabela
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close()
    }
}

initDb.init();