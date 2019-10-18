const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({ ok: true }))

app.get('/notok', (req, res) => res.json({ ok: false }))

app.get('/username', (req, res) => res.json({ username: process.env.Username }))

app.get('/usernamePassword', (req, res) => res.json({ 
    usernamePassword: process.env.MONGODB_PASSWORD, 
    username: process.env.MONGODB_PASSWORD_USR, 
    password: process.env.MONGODB_PASSWORD_PSW }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = { app };