const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const categories = require('./data/recipe.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chef-Recipe')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = categories.find(n => n.id === id)
    res.send(selectedNews)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})