const express = require('express')
const routes = express.Router()

let db = [
    { '1': { Name: 'Cliente 1', idade: '20'} },
    { '2': { Name: 'Cliente 2', idade: '30'} },
    { '3': { Name: 'Cliente 3', idade: '40'} }

]

routes.get('/', (req, res) =>{
    return res.json(db)
})

routes.post('/add', (req, res) =>{
    const body = req.body

    if(!body)
       return res.status(400).end()

    db.push(body)
    return res.json(body)   
})

routes.delete('/:id',(req, res)=> {
    const id = req.params.id

    let newDb = db.filter(item => {
        if(item[id])
            return item
    })

    db = newDb
    return res.send(newDb)
})

module.exports = routes