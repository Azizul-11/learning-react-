const express=require("express");
const app= express();
const cors= require("cors");
require('./db')
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));

const port=3200;

app.get("/",(req, res) => {
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log("Server listening on port");
});
