const express=require('express')
const cors=require('cors')
const app = express()
const {customerRoute}

app.use(cors())
app.use(express.json())

app.listen(8080,()=>{
    console.log('server is running on port 8080')
})