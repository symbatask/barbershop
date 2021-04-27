import uniqid from 'uniqid'
import fs from 'fs'

const statuses = ['done', 'new', 'in progress', 'blocked']

const isConsist = (category) => {
    let bool = true;
    try {
        let buffer = JSON.parse(fs.readFileSync(`./tasks/${category}.json`).toString());
    } catch (err) {
        bool = false;
    }
    return bool;
}

export const createTask = (req, res) => {
    const {title, status} = req.body
    const category = req.query.category
    let newTask = {
        taskId: uniqid(),
        title: title,
        status: status,
        _isDeleted: false,
        _createdAt: +new Date(),
        _deletedAt: null
    }
    if (!isConsist(category)) {
        fs.writeFileSync(`./tasks/${category}.json`, `[${JSON.stringify(newTask)}]`)
        return res.status(200).json({newTask})
    } else {
        let buffer = JSON.parse(fs.readFileSync(`./tasks/${category}.json`).toString());
        let newArray = [...buffer, newTask]
        fs.writeFileSync(`./tasks/${category}.json`, JSON.stringify(newArray))
        return res.status(200).json({newTask})
    }
}

export const getAllTasks = (req, res) => {
    const category = req.query.category
    const date = req.query.timespan
    if (date) {
        let buffer = JSON.parse(fs.readFileSync(`./tasks/${category}.json`).toString());
        let filtered = buffer.filter(el => {
            return +el._createdAt > +new Date(date) && !el._isDeleted
        })
        return res.status(200).json(filtered)
    } else {
        let buffer = JSON.parse(fs.readFileSync(`./tasks/${category}.json`).toString());
        let filtered = buffer.filter(el => !el._isDeleted)
            return res.status(200).json(filtered)
    }
}

export const patchTaskById = (req, res) => {
    const category = req.query.category
    const id = req.query.id
    const {newStatus} = req.body
    let buffer = JSON.parse(fs.readFileSync(`./tasks/${category}.json`).toString());
    let task = buffer.find(el => el.taskId === id)
    if (task){
        if(statuses.includes(newStatus)) {
            task.status = newStatus
            const newArray = buffer.filter(el => el.taskId !== id)
            fs.writeFileSync(`./tasks/${category}.json`, JSON.stringify([...newArray, task]))
            return res.status(200).json(task)
        } else {
            return res.status(501).json({"status" :"error", "message": "incorrect status"})
        }
    } else {
        return res.status(401).json({"status" :"error", "message": "no such task"})
    }
}

export const deleteTaskById = (req, res) => {
    const category = req.query.category
    const id = req.query.id
    let buffer = JSON.parse(fs.readFileSync(`./tasks/${category}.json`).toString());
    let task = buffer.find(el => el.taskId === id)
    if (task){
        task._isDeleted = true
        const newArray = buffer.filter(el => el.taskId !== id)
        fs.writeFileSync(`./tasks/${category}.json`, JSON.stringify([...newArray, task]))
        return res.status(200).json(task)
    } else {
        return res.status(501).json({"status" :"error", "message": "no such task"})
    }
}
