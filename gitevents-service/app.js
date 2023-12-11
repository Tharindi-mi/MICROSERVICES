const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    res.json({ health: "Events Service UP" });
});

app.get('/api/events', (req, res) => {
    getevents().then((events)=>{
      res.json(events)
    }).catch((error)=>{
      res.json({error: error});
    })
  })
  

app.get('/api/events/:username', (req, res) => {
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