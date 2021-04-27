import express from 'express'
import {createTask, getAllTasks, patchTaskById, deleteTaskById} from "../controller/tasks.js";


const router = express.Router()

router.post('/v1/tasks/', createTask)

router.get('/v1/tasks/', getAllTasks)

router.patch('/v1/tasks/', patchTaskById)

router.delete('/v1/tasks/', deleteTaskById)

export default router