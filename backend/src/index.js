const express = require('express');
const app = express();
const port = process.env.PORT || 3333;
const router = require('./router');

require('dotenv').config();

app.use(router);
app.listen(port);