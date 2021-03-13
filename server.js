
require('dotenv').config();
const express = require('express');
const app = express();
const port = 9000;


//*for version 2.0 API
const Twitter = require('twitter-v2');
const client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_KEY_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});




//* @desc  check profile user
//* @route GET /api/v1/:username
//* @access  Public
app.get('/api/v1/:username', async (req, res) => {
    try {

        const { data } = await client.get(`users/by/username/${req.params.username}`)

        res.status(200).json({
            success: true,
            data: data
        })

    } catch (err) {
        res.status(404).json({
            success: false,
            data: 'User Not Found'
        })
        console.log(err)
    }
 
})


//* @desc  show 100 tweets from user
//* @route GET /api/v1/:username/tweets
//* @access  Public
app.get('/api/v1/:username/tweets', async (req, res) => {
    try {
        
        const find = await client.get(`users/by/username/${req.params.username}`)
    
        const { data , meta } = await client.get(`users/${find.data.id}/tweets`,{ 
            max_results: 100,
            start_time:'2019-01-01T17:00:00Z',
            end_time:'2021-03-10T01:00:00Z',
        })

     
        res.status(200).json({
           success: true,
           Tweets: data.length,
          Data : data,
          Meta: meta
        })

     

    } catch (err) {
        res.status(404).json({
            success: false,
            data: 'User Not Found'
        })
    }
    
})


//* @desc  show tweets from user with pagination
//* @route GET /api/v1/:username/tweets/:page
//* @access  Public
app.get('/api/v1/:username/tweets/1', async (req, res) => {
    try {

        const find = await client.get(`users/by/username/${req.params.username}`)
        
        //*v2 api syntax
        const { data , meta } = await client.get(`users/${find.data.id}/tweets`,{ 
            max_results: 10,
            start_time:'2019-01-01T17:00:00Z',
            end_time:'2021-03-10T01:00:00Z',
        })

        res.status(200).json({
            success: true,
            Tweets: data.length,
           Data : data,
           Meta: meta
         })

     

    } catch (err) {
        res.status(404).json({
            success: false,
            data: 'User Not Found'
        })
    }
    
})

app.get('/api/v1/:username/tweets/2', async (req, res) => {
    try {
       

        const find = await client.get(`users/by/username/${req.params.username}`)

        //*v2 api syntax
        const { data , meta } = await client.get(`users/${find.data.id}/tweets`, { 
            max_results: 10,
            start_time:'2019-01-01T17:00:00Z',
            end_time:'2020-12-12T01:00:00Z',
            pagination_token: '7140dibdnow9c7btw3t50bynrss7n10vul4w2eiw7yofq'
        });

        res.status(200).json({
            success: true,
            Tweets: data.length,
           Data : data,
           Meta: meta
         })

    } catch (err) {
        res.status(404).json({
            success: false,
            data: 'User Not Found'
        })
    }
    
})

app.get('/api/v1/:username/tweets/3', async (req, res) => {
    try {

        const find = await client.get(`users/by/username/${req.params.username}`)

        //*v2 api syntax
        const { data , meta } = await client.get(`users/${find.data.id}/tweets`, { 
            max_results: 10,
            start_time:'2019-01-01T17:00:00Z',
            end_time:'2020-12-12T01:00:00Z',
            pagination_token: '7140dibdnow9c7btw3t4651fq8wcn4681eez8xjw74182'
        });

      
        res.status(200).json({
            success: true,
            Tweets: data.length,
           Data : data,
           Meta: meta
         })

    } catch (err) {
        res.status(404).json({
            success: false,
            data: 'User Not Found'
        })
    }
    
})

    // ** 404 not found page
   app.all('*', (req, res, next) => {
    res.status(404).json({
        success: false,
        data: 'error page'
    })
   })

app.listen(port, async function () {
    try {
        console.log("Express server listening on port ", port);
    } catch (err) {
        console.log(err)
    }
});

module.exports = app; // for testing
