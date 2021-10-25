//calling dependencies
const dotenv = require('dotenv')
const express = require ('express')
const axios = require('axios')
const cheerio = require('cheerio')

//instants
dotenv.config()
const app = express()
const port = process.env.port



//starting express
app.get('/', (req, res) => {

    res.send('server is running_with nodemon')
}
)

app.listen(port, () => {
    console.log('listening to port ${port}')
})

