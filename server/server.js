import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
dotenv.config()
import tasks from './route/tasks.js'

const server = express()

const port = process.env.PORT || 8000

server.use(morgan('dev'))
server.use(express.json())
server.use(cors())

server.use('/api', tasks)

server.listen(port, () => {
    console.log('Server is started')
})
