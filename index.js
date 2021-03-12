const dotenv = require('dotenv')
dotenv.config({
    path: './config/config.env'
})
const express = require('express');
const app = express();
const port = 9000;

//*for version 1.1 API
const Twit = require('twit')
const twit = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_KEY_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
})

//*for version 2.0 API
const Twitter = require('twitter-v2');
const client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_KEY_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});


//* username twitter

const USER_NAME = 'damarowen'

//* @desc  check profile user
//* @route GET /api/v1/profile
//* @access  Public
app.get('/api/v1/profile', async (req, res) => {
    try {

     const query = await twit.get('users/show', { screen_name: `${USER_NAME}`,})

        res.status(200).json({
            data: query.data
        })

    } catch (err) {
        console.error(err)
    }
})

//* @desc  show tweets from user with pagination
//* @route GET /api/v1/profile/:page
//* @access  Public
app.get('/api/v1/tweets/1', async (req, res) => {
    try {
        //*v1 api syntax
        const query = await twit.get('users/show', { screen_name: `${USER_NAME}`,})
        const { id } =  query.data
   console.log(id)
        //*v2 api syntax
        const { data , meta } = await client.get(`users/${id}/tweets`, { 
            max_results: 10,
            start_time:'2019-01-01T17:00:00Z',
            end_time:'2020-12-12T01:00:00Z'
        });

        res.status(200).json({
          data : data,
          meta: meta
        })

    } catch (err) {
        console.error(err)
    }
})

app.get('/api/v1/tweets/2', async (req, res) => {
    try {
        //*v1 api syntax
        const query = await twit.get('users/show', { screen_name: `${USER_NAME}`,})
        const { id} =  query.data

        //*v2 api syntax
        const { data , meta } = await client.get(`users/${id}/tweets`, { 
            max_results: 10,
            start_time:'2019-01-01T17:00:00Z',
            end_time:'2020-12-12T01:00:00Z',
            pagination_token: '7140dibdnow9c7btw3t50bynrss7n10vul4w2eiw7yofq'
        });

        res.status(200).json({
          data : data,
          meta: meta
        })

    } catch (err) {
        console.error(err)
    }
})

app.get('/api/v1/tweets/3', async (req, res) => {
    try {
        //*v1 api syntax
        const query = await twit.get('users/show',  { screen_name: `${USER_NAME}`,})
        const { id} =  query.data

        //*v2 api syntax
        const { data , meta } = await client.get(`users/${id}/tweets`, { 
            max_results: 10,
            start_time:'2019-01-01T17:00:00Z',
            end_time:'2020-12-12T01:00:00Z',
            pagination_token: '7140dibdnow9c7btw3t4651fq8wcn4681eez8xjw74182'
        });

        res.status(200).json({
          data : data,
          meta: meta
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