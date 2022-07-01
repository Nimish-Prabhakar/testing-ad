const express = require('express');
const cors = require('cors');
const ips = require('./api/ips.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/ips', ips);

module.exports = app;
