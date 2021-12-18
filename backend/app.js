const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const db = require('./config/db');
const mysql = require('mysql2/promise');
const config = require('./config/config');
const Populate = require('./utils/populate_product_pictures')
var cors = require('cors');

app.use(cors());

configureDB()
	.then(() => db.authenticate())
	.then(() => console.log('Connection has been established successfully.'))
	.then(() => configureTables())
	.then(() => Populate())
	.catch((error) => console.error('Unable to connect to the database:', error));

async function configureTables() {
	// sync all models with database
	let User = require('./models/User');
	let Product = require('./models/Product');
	let Order = require('./models/Order');
	let ProductCategory = require('./models/Product_Category');
	let ProductPictures = require('./models/Product_Pictures');
	await db.sync();
}

async function configureDB() {
	// create db if it doesn't already exist
	const { host, port, user, password, database } = config.db;
	const connection = await mysql.createConnection({ host, port, user, password });
	await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
}

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/', (req, res) => res.send('App is working'));
app.use('/api', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = {
	app
};
