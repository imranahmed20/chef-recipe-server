const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chef-Recipe')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})