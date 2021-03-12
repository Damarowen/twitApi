const dotenv = require('dotenv')
dotenv.config({
    path: './config/config.env'
})
const express = require('express');
const app = express();

const port = 9000;

app.get('/data', async (req, res) => {
    try {
     res.status(200).json({
         data: "hi damar"
     })

    } catch (err) {
        console.error(err)
    }
})

app.listen(port, async function () {
    try {
        console.log("Express server listening on port ", port);
    } catch (err) {
        console.log(err)
    }
});