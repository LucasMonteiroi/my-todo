require('dotenv/config');
const app = require('./src/app');
const port = process.env.PORT || 3000;
console.log(`Running on: ${process.env.NODE_ENV}`)
app.listen(port, console.log(`Listening on port: ${port}`));