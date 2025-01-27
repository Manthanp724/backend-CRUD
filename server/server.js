const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()
const app = express()
const userRoutes = require('../server/routes/user.route.js')

// middleware

app.use(express.json())
app.use(cors())

PORT = process.env.PORT || 5050

// Database connect

mongoose.connect(process.env.DB_CONNECTION)
.then( () => console.log("Database is connected Successfully"))
.catch( (err) => console.log(err))



// app.get("/" , (req , res) => {
//     res.send("Hello World, this page is created by expess")
// })
app.listen(PORT,() => console.log(`Server is runnig on ${PORT}`))
app.use(userRoutes)

