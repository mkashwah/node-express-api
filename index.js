const express = require ('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.port


app.get('/', (req, res) => {

    res.send('server is running_with nodemon')
}
)

app.listen(port, () => {
    console.log('listening to port ${port}')
})

