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
    origin: "localhost:3001",
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

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
 