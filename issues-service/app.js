const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  res.json({health:"Issues Service UP"})
})

app.get('/api/issues/:username/:repository', (req, res) => {

  axios.get(`https://api.github.com/repos/${req.params.username}/${req.params.repository}/issues`).then((response)=>{
    res.json(response.data)
  }).catch((e)=>{
    res.json({message:e.message})
  })
})

module.exports = app;