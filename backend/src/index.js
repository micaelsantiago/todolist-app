const express = require('express');
const app = express();
const port = 3333;
const router = require('./router');

app.use(router);
app.listen(port);