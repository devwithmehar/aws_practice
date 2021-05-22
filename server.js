require('dotenv').config()
const express = require('express');
const cors = require('cors');

//Assigning the port to the backend server
const port = process.env.PORT || 5000;

//Creating a server
const app = express();

app.use(cors());
//It will let the application know that we are using json format
app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Welcome to the home page');
})

app.listen(port,()=>{
    console.log(`The Server is running on PORT NO: ${port}`);
})