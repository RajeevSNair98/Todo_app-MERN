const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/TodoRoutes')

const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

app.use("/",routes)

mongoose.connect(process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
.then(()=> console.log("Connected to MongoDB"))
.catch((err)=> console.log(err))

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})
