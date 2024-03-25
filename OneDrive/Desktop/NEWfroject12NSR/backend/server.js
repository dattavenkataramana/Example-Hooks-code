const express = require('express');
const path = require('path');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dbPath = path.join(__dirname, 'database.db');
let db = null;
app.use(bodyParser.json());
app.use(cors());

const initializeDbServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });
        app.listen(3000, () =>
            console.log(`Server running at http://localhost:3000`)
        );
    } catch (e) {
        console.log(`Db Error: ${e.message}`);
        process.exit(1);
    }
};

initializeDbServer()


app.get('/sqldata', async (req, res)=>{
    const getData= `SELECT * FROM sqldata`

    const data = await db.all(getData)

    res.send(data)
})

app.post('/sqldata', async (req, res) => {
    const { name, email, password } = req.body;
    const addDataToSqlTable =
        `INSERT INTO sqldata(name, email, password) VALUES (?, ?, ?)`;
    try {
        await db.run(addDataToSqlTable, [name, email, password]);
        res.json({ message: 'Data inserted successfully' });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data' });
    }
});


 