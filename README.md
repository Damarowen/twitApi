# TwitApi


[POSTMAN DOCS](https://documenter.getpostman.com/view/11942081/Tz5qaHA7)


This App using library 
[twitter-v2 Library](https://www.npmjs.com/package/twitter-v2)


## Installation

You need TWITTER API KEY to run.

```sh
1. clone
2. Open .ENV file and insert you PERSONAL API TWITTER KEY to the env file ( below is the example )

- API_KEY=
- API_KEY_SECRET=
- ACCESS_TOKEN=
- ACCESS_TOKEN_SECRET=
3. npm i
4. npm start
```

## Features

- GET twitter user profile JSON by username twitter
- GET twitter user profile tweets with pagination

## TESTING

I'm using MOCHA and CHAI with CHAI-HTTP library

this is just very simple testing

```sh
run npm test
```

After testing you can see TESTING REPORTS in REPORTS folder in repo

MOCHACHROME convert testing to html

## Docker Compose Installation



```sh
run docker-compose up
```

> Note: `--YOU NEED TWITTER API KEY TO INSERT IN ENV FILE FIRTST TO RUN COMPOSE `.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
http://localhost:9000/api/v1/{USERNAME}
```

## Next things to do

The pagination page is not dynamic, user still use route 1,2 or 3 to have pagination
In the next future updates, i will make pagination to dynamic with :page paramas
