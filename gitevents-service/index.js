const app = require('./app');
const port = process.env.PORT || 3004;

app.listen(port, () => {
  console.log(`Events service app listening on port ${port}`)
})