const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const PORT = 3001;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "star",
});

app.use(cors({
    origin: "localhost:3001",
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
}))

app.get("/123", (req, res) => {
    const sqlQuery = "INSERT INTO customers (rowno) VALUES (1)";
    db.query(sqlQuery, (err, result) => {
        res.send("success!");
    });
});


app.get("/customers/api/list", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("list!!!");
    const sqlQuery =
      "SELECT * FROM CUSTOMERS"
    db.query(sqlQuery, (err, result) => {
      // select문 결과를 클라이언트에게 반환
      res.send(result);
      console.log(err);
    });
  });

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});


// CUSTOMERS create table CUSTOMERS (
// 	ID int not null auto_increment primary key,
// 	NAME nvarchar(10),
// 	NOTE nvarchar(500),
//     TEL nvarchar(15),
//     DATE nvarchar(12),
//     SCHOOL nvarchar(15),
//     FEE int(100),
// 	REGISTER_ID nvarchar(20),
// 	REGISTER_DATE DATETIME DEFAULT now(),
// 	UPDATER_ID nvarchar(20),
// 	UPDATER_DATE DATETIME DEFAULT now()
// );


// INSERT INTO CUSTOMERS (ID, NAME, NOTE, TEL, DATE, SCHOOL, FEE, REGISTER_ID, UPDATER_ID)
// VALUE(4, '박민영', '', '01012322322', '20221209', '김비서', '5000', 'SOOHOON', 'SOOHOON');

// select * from customers;

//  SELECT * FROM CUSTOMERS;
 