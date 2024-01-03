const express = require('express');
const axios = require('axios');
const { addissue, getissues} = require('./dynamodb');
const app = express();

app.get('/', (req, res) => {
  res.json({health:"Issues Service UP"})
})

// app.get('/api/issues/:username/:repository', (req, res) => {

//   axios.get(`https://api.github.com/repos/${req.params.username}/${req.params.repository}/issues`).then((response)=>{
//     res.json(response.data)
//   }).catch((e)=>{
//     res.json({message:e.message})
//   })
// })

app.get('/api/issues', (req, res) => {
  getissues().then((issues)=>{
    res.json(issues)
  }).catch((error)=>{
    res.json({error: error});
  })
})

app.get('/api/issues/:username/:repository', (req, res) => {
  axios.get(`https://api.github.com/repos/${req.params.username}/${req.params.repository}/issues`).then((response)=>{
    addissue(response.data).then(()=>{
      res.json(response.data)
    }).catch((err)=>{
      res.json({error:err})
    })
  }).catch((e)=>{
    res.json({message:e.message})
  })
})
module.exports = app;