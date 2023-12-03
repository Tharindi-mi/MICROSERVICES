const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT | 3000;

app.get('/', (req, res) => {
    res.json({health:"Commits Service UP"})
})

app.get('/api/commits/:username/:repository', (req, res) => {

  axios.get(`https://api.github.com/repos/${req.params.username}/${req.params.repository}/pulls`).then((response)=>{
    res.json(response.data)
  }).catch((e)=>{
    res.json({message:e.message})
  })
})

app.listen(port, () => {
  console.log(`Commits service app listening`)
})