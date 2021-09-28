const { urlencoded } = require('express')
const express = require('express')
const app = express()
const router = express.Router()
require('dotenv').config()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, './lkonweb/build')));
app.use(express.static(path.resolve(__dirname, './public')));

const PORT = process.env.PORT


app.get('/', (req, res) => {
    res.send('hi from netflix clone')
})

app.listen(PORT, () => {
    console.log("App running at port " + PORT);
})