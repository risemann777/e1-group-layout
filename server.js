import * as process from 'node:process'
import dotenv from 'dotenv'
import express from 'express'
import {resolve} from 'path'
dotenv.config()
const PORT = process.env.SERVER_PORT

resolve('./public/js')

const app = express()
app.use(express.static(resolve('./public/')))

app.get('/', (req, res) => {
  res.sendFile(resolve('./public/'))
})

app.listen(PORT, (err) =>{
  if (err) console.log(err)
  console.log(`Server listening on PORT = ${PORT}`)
})