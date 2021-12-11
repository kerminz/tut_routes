const express = require('express')
const app = express()
app.use(express.json());
const port = process.env.PORT || 3001



app.listen(port, (err) => {
    if (err) {
        console.log('Error: ', err)
    } else {
        console.log('Server is up on port: ', port)
    }
})