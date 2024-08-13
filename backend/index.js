const express = require('express');
const connectToMongo = require("./db")
const PORT =5000;
const app = express();


connectToMongo();

app.use(express.json());
//Available routes

app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/notes',require('./routes/notes'))

// app.get('/',(req,res) =>{
//     res.send('hello bro')
// })
app.listen(PORT , ()=>{
    console.log(`running on http://localhost:${PORT}`)
})


// connectToMongo().then(() =>{
//     app.listen(PORT,() => {
//         console.log(`server is running :  ${PORT}`);
//     });
// });
