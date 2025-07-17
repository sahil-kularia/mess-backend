const express = require('express');
const app = express();
const cors = require('cors');

const ngoRoutes = require("./route/ngo.route");

app.use(cors());


const route = require('./route/student.route');
app.use(express.json());
app.use('/student', route);
const connection = require('./server/data');

app.use("/ngo", ngoRoutes);

app.get('/',(req,res)=>{
    res.send('hey this is the backend for the food wastage management system');
})

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});
