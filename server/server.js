const express = require("express");
const cors    = require("cors");
const mysql   = require("mysql");
const app     = express();
const PORT    = 3001;

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "star",
});

const printRes = (err, result) => {
    (result) ? console.log(result) : console.log(err);
}

app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

// customers
app.get("/api/customers/list", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const sqlQuery = "SELECT * FROM CUSTOMERS";

    db.query(sqlQuery, (err, result) => {
        res.send(result);
        printRes(err, result);
    });
});

app.post("/api/customers/insert", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const refs = req.body;
    const sqlQuery = `INSERT INTO CUSTOMERS(NAME, SEX, TEL, BIRTH, DATE, SCHOOL, FEE, PARENTPHONE, NOTE, CURRYN) VALUES(?);`;

    db.query(sqlQuery, [refs], (err, result) => {
        res.send(result);
        printRes(err, result);
    });
});
app.post("/api/customers/update", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const key = req.body.key.replace(/\'/gi, "");
    const value = req.body.value;
    const id = req.body.id;
    const sqlQuery = `UPDATE CUSTOMERS SET ${key} = ?, UPDATER_ID = 'SOOHOON' WHERE  ID = ? ;`;

    db.query(sqlQuery, [value, id], (err, result) => {
        res.send(result);
        printRes(err, result);
    });
});

app.delete("/api/customers/delete", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.body.id;
    const sqlQuery = `DELETE FROM CUSTOMERS WHERE id = ? ;`;
    db.query(sqlQuery, [id], (err, result) => {
        res.send(result);
        printRes(err, result);
    });
});

// environment
app.get("/api/environment/list", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    const sqlQuery = "SELECT * FROM ENVIRONMENT";

    db.query(sqlQuery, (err, result) => {
        res.send(result);
        printRes(err, result);
    });
});

app.get("/api/environment/info", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const sqlQuery = "SELECT * FROM ENVIRONMENT WHERE ID = '1';";

    db.query(sqlQuery, (err, result) => {
        res.send(result);
        printRes(err, result);
    });
});

app.post("/api/environment/update", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const mode = req.body.mode
    const sqlQuery = "UPDATE ENVIRONMENT SET MODE = ?, UPDATE_ID = 'SOOHOON' WHERE ID = '1';";

    db.query(sqlQuery, [mode], (err, result) => {
        res.send(result);
        printRes(err, result);
    });
});
