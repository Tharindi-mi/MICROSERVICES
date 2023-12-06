const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`Main Application service app listening on port ${port}`)
})