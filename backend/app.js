const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const db = require('./config/db')

db.authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(error => console.error('Unable to connect to the database:', error))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'))
app.use('/api', routes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = {
  app
}