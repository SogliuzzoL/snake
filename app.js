const config = require('./config/config')

const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(config.port, () =>
    {
        console.log("Snake lancé sur le port %d", config.port)
    }
)