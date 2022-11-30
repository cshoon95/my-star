const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 3001;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "star",
});

app.get("/", (req, res) => {
    const sqlQuery = "INSERT INTO customers (rowno) VALUES (1)";
    db.query(sqlQuery, (err, result) => {
        res.send("success!");
    });
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});