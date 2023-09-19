const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 5000

// app.use(express.json())

// // Available routes
// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

// app.get('/api/v1/signup',(req,res)=>{
//     obj={
//         a:'this',
//         number:34
//     }
//     res.json(obj)
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})