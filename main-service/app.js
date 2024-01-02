const express = require('express');
const axios = require('axios');
const app = express();   

app.use(express.json());

app.get('/', (req, res) => {
  res.json({health:"Main Application Service UP"})
})

const commitservice = 'http://commit-service:80'
const issueservice = `http://issues-service:80`
const pullrequestservice = `http://pull-service:80`
const peventservice = `http://events-service:80`
//Commit Service 
app.get('/commits-service/:username/:repository', (req, res) => {
    axios.get(`${commitservice}/api/commits/${req.params.username}/${req.params.repository}`).then((response)=>{
        res.json(response.data);
    }).catch((err)=>{
        res.json(err);
    })
})

//Commits Retrieve from AWS DynamoDB
app.get('/commits-service', (req, res) => {
    axios.get(`${commitservice}/api/commits/`).then((response)=>{
        res.json(response.data);
    }).catch((err)=>{
        res.json(err);
    })
})

//Issues Service
app.get('/issues-service/:username/:repository', (req, res) => {
    axios.get(`${issueservice}/api/issues/${req.params.username}/${req.params.repository}`).then((response)=>{
        res.json(response.data);
    }).catch((err)=>{
        res.json(err);
    })
})

//Issues Retrieve from AWS DynamoDB
app.get('/issues-service', (req, res) => {
    axios.get(`${commitservice}/api/issues/`).then((response)=>{
        res.json(response.data);
    }).catch((err)=>{
        res.json(err);
    })
})

//Pull Request Service
app.get('/pulls-service/:username/:repository', (req, res) => {
    axios.get(`${pullrequestservice}/api/pulls/${req.params.username}/${req.params.repository}`).then((response)=>{
        res.json(response.data);
    }).catch((err)=>{
        res.json(err);
    })
})


//events Service 
app.get('/events-service/:username', (req, res) => {
    const username = req.params.username;
    axios.get(`https://api.github.com/users/${username}/events`)
        .then((response) => {
            const eventsCount = response.data.length;
            res.json({ username: username, eventsCount: eventsCount });
        })
        .catch((error) => {
            res.status(404).json({ error: "User not found or unable to fetch events" });
        });
});

module.exports = app;