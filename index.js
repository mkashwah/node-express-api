//calling dependencies
const dotenv = require('dotenv')
const express = require ('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')

//instants
dotenv.config()
const app = express()
const port = process.env.port



//express routing
app.get('/', (req, res) => {
    res.send('server is running_with nodemon')
}
)
app.listen(port, () => {
    console.log('listening to port %s', port)
})


//making axios get query
app.get('/crypto', (req, res) =>{
    axios.get('https://coinmarketcap.com/').then((response) =>{
        const html_page = response.data
        console.log(html_page)
    })
})


