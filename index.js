//calling dependencies
const dotenv = require('dotenv')
const express = require ('express')
const axios = require('axios')
const cheerio = require('cheerio')
const pretty = require('pretty')
const { response } = require('express')

//instants
dotenv.config()
const app = express()
const port = process.env.port
const articles = []
const news_sources = [{
    name: '',
    link: ''
},
{
    name: '',
    link: ''
},
{
    name: '',
    link: ''
},
]



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
    axios.get('https://www.newsbtc.com/').then((response) =>{
        const html_page = response.data
        // console.log(html_page)
        const $ = cheerio.load(html_page)
        $('a:contains("Bitcoin")', html_page).each(function () {
           const title = $(this).text()
           const url =$(this).attr('href')
            articles.push({
                title,
                url
            })
        })
        res.json(articles)
        // console.log(articles)
    }).catch((err) => console.log(err))
})


