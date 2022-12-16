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

// environment
app.get("/api/environment/list", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    const sqlQuery = "SELECT * FROM ENVIRONMENT";

    db.query(sqlQuery, (err, result) => {
        res.send(result);
        printRes(err, result);
    });
});

app.get("/api/environment/info/:id", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const ID = req.params.ID;
    const sqlQuery = "SELECT * FROM ENVIRONMENT WHERE ID = ?;";

    db.query(sqlQuery, [ID], (err, result) => {
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
