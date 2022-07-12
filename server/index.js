const express = require('express')
const cors = require('cors')
const app = express()
const {getHouses,createHouse,deleteHouse,updateHouse}= require('./controller')
app.use(express.json())
app.use(cors())


app.get('/api/houses',getHouses)
app.post('/api/houses',createHouse)
app.delete('/api/houses/:id',deleteHouse)
app.put('/api/houses/:id',updateHouse)

const SERVER_PORT = 4004

app.listen(SERVER_PORT,()=> console.log(`server runnin on ${SERVER_PORT}`))