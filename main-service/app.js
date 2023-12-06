const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({health:"Main Application Service UP"})
})

const commitservice = `http://commit-service:80`
const issueservice = `http://issues-service:80`
const pullrequestservice = `http://pulls-service:80`

//Commits Service 
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

//Pull Request Service
app.get('/pulls-service/:username/:repository', (req, res) => {
    axios.get(`${pullrequestservice}/api/pulls/${req.params.username}/${req.params.repository}`).then((response)=>{
        res.json(response.data);
    }).catch((err)=>{
        res.json(err);
    })
})

module.exports = app;
