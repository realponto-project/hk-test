const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/', (req, res, next) => res.send('vai vendo!!!'))
app.use('/live', (req, res, next) => res.send('estou vivo!!!'))
app.listen(port, () => console.log('estou aqui rodando o server'))