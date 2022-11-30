const express = require('express') 
const app = express() 
const port = 3001 // react의 기본값은 3000이니까 3000이 아닌 아무 수

app.get('/', (req, res) =>{
    res.send('data send!')
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})